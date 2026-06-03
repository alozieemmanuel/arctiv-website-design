// SVG recreation of the ARCTIV/Artiv "A" logomark with blue diagonal accent
export default function ArtivLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Artiv logo"
    >
      {/* Left leg of A */}
      <path
        d="M30 2 L4 50 L13 50 L30 16 L47 50 L56 50 Z"
        fill="white"
      />
      {/* Crossbar cutout — white inner triangle */}
      <path
        d="M30 22 L17 46 L43 46 Z"
        fill="#0a1628"
      />
      {/* Blue diagonal accent bars */}
      <rect
        x="26"
        y="28"
        width="6"
        height="18"
        rx="1"
        transform="rotate(-35 26 28)"
        fill="#2563eb"
        opacity="0.9"
      />
      <rect
        x="31"
        y="28"
        width="4"
        height="14"
        rx="1"
        transform="rotate(-35 31 28)"
        fill="#60a5fa"
        opacity="0.7"
      />
    </svg>
  )
}
