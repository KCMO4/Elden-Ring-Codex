import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pencil, Save, Trash2, X } from 'lucide-react'
import { useNote } from '../lib/notes'
import type { EntityType } from '../data/types'

interface Props {
  type: EntityType
  slug: string
}

/**
 * Personal note attached to an entity. Persists to localStorage
 * (codex-notes-v1) so the user can jot down theories, observations, or
 * questions per entry. Sidebar widget — collapsed by default to a small
 * "Tu nota" button; expands into a textarea on demand.
 */
export function NoteEditor({ type, slug }: Props) {
  const [stored, setStored] = useNote(type, slug)
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [savedFlash, setSavedFlash] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setDraft(stored)
  }, [stored])

  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus()
      const len = textareaRef.current.value.length
      textareaRef.current.setSelectionRange(len, len)
    }
  }, [open])

  const save = () => {
    setStored(draft.trim())
    setSavedFlash(true)
    window.setTimeout(() => setSavedFlash(false), 1400)
  }

  const remove = () => {
    setStored('')
    setDraft('')
    setOpen(false)
  }

  const hasNote = stored.trim().length > 0
  const dirty = draft !== stored

  return (
    <div className="parchment-panel p-4">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="block w-1 h-1 rounded-full bg-codex-gold-dim" aria-hidden />
          <p className="font-heading text-xs text-codex-gold-dim tracking-[0.18em] uppercase">
            Tu nota
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-codex-gold-dim hover:text-codex-gold-bright transition-colors"
          aria-label={open ? 'Cerrar nota' : 'Abrir nota'}
        >
          {open ? <X size={13} /> : <Pencil size={13} />}
        </button>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key="editor"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <textarea
              ref={textareaRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Anota una teoría, una pregunta, una observación…"
              rows={5}
              className="w-full px-3 py-2 rounded-sm bg-codex-black/40
                         border border-codex-gold-dim/30 focus:border-codex-gold-dim/70
                         font-body text-sm text-codex-parchment placeholder:text-codex-parchment-dim/40
                         leading-relaxed resize-y outline-none transition-colors"
            />
            <div className="flex items-center justify-between gap-2 mt-2">
              <button
                type="button"
                onClick={remove}
                disabled={!hasNote}
                className="inline-flex items-center gap-1 font-heading text-[10px] tracking-wider uppercase
                           text-codex-rot/70 hover:text-codex-rot disabled:opacity-30 disabled:cursor-not-allowed
                           transition-colors"
              >
                <Trash2 size={11} />
                Borrar
              </button>
              <div className="flex items-center gap-2">
                {savedFlash && (
                  <span className="font-body text-[10px] text-codex-gold-dim italic">guardado</span>
                )}
                <button
                  type="button"
                  onClick={save}
                  disabled={!dirty}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm
                             font-heading text-[10px] tracking-wider uppercase
                             bg-codex-gold/10 border border-codex-gold/30 text-codex-gold-bright
                             hover:bg-codex-gold/20 disabled:opacity-30 disabled:cursor-not-allowed
                             transition-all"
                >
                  <Save size={11} />
                  Guardar
                </button>
              </div>
            </div>
          </motion.div>
        ) : hasNote ? (
          <motion.button
            key="preview"
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="block w-full text-left font-body text-sm text-codex-parchment-dim leading-relaxed line-clamp-3 italic hover:text-codex-parchment transition-colors"
            aria-label="Ver/editar nota"
          >
            "{stored}"
          </motion.button>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-[11px] text-codex-parchment-dim/45 italic"
          >
            Sin notas. Pulsa el lápiz para escribir una.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
