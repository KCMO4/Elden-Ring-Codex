import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="codex-section py-24 text-center">
      <p className="font-heading text-xs text-codex-gold-dim tracking-widest uppercase mb-4">404 · Carta del Códice perdida</p>
      <h1 className="font-heading text-4xl text-codex-gold-bright mb-4">Esta página no existe en el Interregno</h1>
      <p className="font-subheading italic text-lg text-codex-parchment-dim mb-8 max-w-xl mx-auto">
        Las grandes runas que la sostenían se han fracturado. Regresa al árbol y prueba otro camino.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2 bg-codex-gold/10 border border-codex-gold/40 text-codex-gold font-heading text-sm tracking-wider uppercase rounded-sm hover:bg-codex-gold/20 transition-all"
      >
        Volver al Códice
      </Link>
    </section>
  )
}
