interface SectionLabelProps {
  text: string
  light?: boolean
  centered?: boolean
}

export function SectionLabel({ text, light = false, centered = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
      <span className={`text-xs font-semibold uppercase tracking-[0.1em] ${light ? 'text-copper-400' : 'text-copper-500'}`}>
        {text}
      </span>
    </div>
  )
}
