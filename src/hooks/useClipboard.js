import { useRef } from 'react'

export function useClipboard() {
  const textareaRef = useRef(null)

  const copyToClipboard = (text) => {
    if (!textareaRef.current) {
      textareaRef.current = document.createElement('textarea')
      textareaRef.current.style.position = 'absolute'
      textareaRef.current.style.left = '-9999px'
      document.body.appendChild(textareaRef.current)
    }

    textareaRef.current.value = text
    textareaRef.current.select()
    document.execCommand('copy')
  }

  return copyToClipboard
}
