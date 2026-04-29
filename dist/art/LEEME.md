# Carpeta de imágenes del Códice

Coloca aquí tus imágenes locales organizadas por categoría.
El app cargará automáticamente la imagen si existe; de lo contrario mostrará una ilustración SVG generada.

## Estructura esperada

```
public/art/
  characters/    → retratos verticales (800×1000 px recomendado)
    marika.jpg
    radagon.jpg
    godfrey.jpg
    ...

  regions/       → banners horizontales (1600×700 px recomendado)
    limgrave.jpg
    caelid.jpg
    leyndell.jpg
    ...

  factions/      → cuadradas o paisaje (800×800 o 1200×800 px)
    golden-order.jpg
    godskins.jpg
    ...

  endings/       → paisaje (1200×800 px recomendado)
    age-fracture.jpg
    age-stars.jpg
    ...

  concepts/      → paisaje (1200×800 px recomendado)
    elden-ring.jpg
    erdtree.jpg
    ...
```

## Formatos soportados
JPG, PNG, WEBP

## Notas
- Los slugs de archivo deben coincidir con los IDs definidos en los datos (src/data/).
- Si un archivo no existe, se muestra una ilustración SVG generada automáticamente.
- No uses URLs externas ni hotlinks.
