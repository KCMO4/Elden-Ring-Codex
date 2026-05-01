"""Detect images where Real-ESRGAN tile blending failed catastrophically.

Failure signature: most cells in a fine grid have near-zero high-frequency
detail (gray/uniform mush) while a few cells have sharp detail. Healthy
images have continuous anatomy — variance is spread evenly across cells.

Test: tile into 16×16 cells, compute Laplacian variance per cell. If
>40% of cells have variance below 3% of the max cell variance, the image
is likely corrupted.
"""
from PIL import Image
import numpy as np
import glob
import os
from concurrent.futures import ProcessPoolExecutor

GRID = 16

def laplacian_variance(arr: np.ndarray) -> float:
    if arr.ndim == 3:
        gray = arr.mean(axis=2)
    else:
        gray = arr
    if gray.shape[0] < 3 or gray.shape[1] < 3:
        return 0.0
    lap = (
        gray[1:-1, 1:-1] * -4
        + gray[1:-1, :-2]
        + gray[1:-1, 2:]
        + gray[:-2, 1:-1]
        + gray[2:, 1:-1]
    )
    return float(lap.var())

def score_image(path: str):
    try:
        im = Image.open(path).convert('RGB')
        arr = np.asarray(im, dtype=np.float32)
        h, w = arr.shape[:2]
        cell_h = h // GRID
        cell_w = w // GRID
        if cell_h < 8 or cell_w < 8:
            return path, 0.0, im.size, 0.0, 0.0
        variances = []
        for i in range(GRID):
            for j in range(GRID):
                cell = arr[i*cell_h:(i+1)*cell_h, j*cell_w:(j+1)*cell_w]
                variances.append(laplacian_variance(cell))
        v = np.array(variances)
        if v.max() < 1:
            return path, 0.0, im.size, 0.0, 0.0
        threshold = v.max() * 0.03
        flat_count = int(np.sum(v < threshold))
        flat_fraction = flat_count / len(v)
        # Also: variance of variances. Corrupted images have very few sharp cells = high variance of variances
        cv = (v.std() / max(v.mean(), 1)) if v.mean() > 0 else 0
        return path, float(flat_fraction), im.size, float(cv), float(v.mean())
    except Exception:
        return path, 0.0, (0, 0), 0.0, 0.0


def main():
    paths = sorted(glob.glob('public/art/*/*.jpg'))
    results = []
    with ProcessPoolExecutor(max_workers=8) as ex:
        for path, ff, size, cv, mean in ex.map(score_image, paths):
            results.append((ff, cv, path, size, mean))

    # Suspect = high flat_fraction AND high cv (variance-of-variances)
    suspects = [r for r in results if r[0] >= 0.40 and r[1] >= 1.5]
    suspects.sort(key=lambda r: -(r[0] * r[1]))

    print(f'Scanned {len(paths)} images.')
    print(f'Suspects (>=40% flat cells + cv>=1.5): {len(suspects)}')
    print()
    print(f'  flat%   cv    size           file')
    for ff, cv, path, size, mean in suspects:
        rel = path.replace(os.sep, '/').replace('public/art/', '')
        print(f'  {ff*100:5.1f}%  {cv:4.2f}  {size[0]:4}x{size[1]:<4}    {rel}')


if __name__ == '__main__':
    main()
