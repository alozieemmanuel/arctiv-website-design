interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault()
        window.history.pushState({}, '', '/')
        window.dispatchEvent(new PopStateEvent('popstate'))
      }}
      className={`flex items-center gap-2 ${className}`}
    >
      <img
        src="/arctiv_logo.png"
        alt="Arctiv"
        className="h-9 w-auto"
      />
    </a>
  )
}
