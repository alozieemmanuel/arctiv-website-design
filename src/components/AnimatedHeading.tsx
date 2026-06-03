import { useState, useEffect, CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string          // use \n for line breaks
  className?: string
  style?: CSSProperties
  initialDelay?: number // ms before animation begins
  charDelay?: number    // ms between each character
}

export default function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [visibleCount, setVisibleCount] = useState(0)

  const lines = text.split('\n')

  // Flatten all chars across lines to assign global indices
  const allChars: { lineIndex: number; charIndex: number; char: string }[] = []
  lines.forEach((line, li) => {
    ;[...line].forEach((ch, ci) => {
      allChars.push({ lineIndex: li, charIndex: ci, char: ch })
    })
  })

  useEffect(() => {
    // Start after initialDelay, then reveal one char every charDelay ms
    const timers: ReturnType<typeof setTimeout>[] = []

    allChars.forEach((_, i) => {
      const t = setTimeout(
        () => setVisibleCount((prev) => Math.max(prev, i + 1)),
        initialDelay + i * charDelay
      )
      timers.push(t)
    })

    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Build a flat index counter as we render
  let globalIndex = 0

  return (
    <h1 className={className} style={style}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {[...line].map((ch) => {
            const idx = globalIndex++
            const isVisible = idx < visibleCount
            return (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-18px)',
                  transition: 'opacity 500ms, transform 500ms',
                }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
