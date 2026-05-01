import { useEffect } from 'react'

interface PageMeta {
  title: string
  description?: string
  ogImage?: string
}

function setOrCreateMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Updates document.title plus meta description and og:image for the current route.
 * Restores defaults on unmount.
 */
export function usePageMeta({ title, description, ogImage }: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = `${title} · Códice del Orden Fracturado`

    if (description) {
      setOrCreateMeta('name', 'description', description)
      setOrCreateMeta('property', 'og:description', description)
    }
    setOrCreateMeta('property', 'og:title', title)
    setOrCreateMeta('property', 'og:type', 'article')
    if (ogImage) {
      setOrCreateMeta('property', 'og:image', ogImage)
      setOrCreateMeta('name', 'twitter:card', 'summary_large_image')
      setOrCreateMeta('name', 'twitter:image', ogImage)
    }

    return () => {
      document.title = prevTitle
    }
  }, [title, description, ogImage])
}
