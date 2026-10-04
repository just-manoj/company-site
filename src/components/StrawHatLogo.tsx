import { Colors } from '../config/Colors'
import { siteConfig } from '../config/siteConfig'

type StrawHatLogoProps = {
  compact?: boolean
}

export function StrawHatLogo({ compact = false }: StrawHatLogoProps) {
  return (
    <span className={`logo ${compact ? 'logo--compact' : ''}`}>
      <svg
        className="logo__mark"
        viewBox="0 0 64 64"
        width="36"
        height="36"
        aria-hidden="true"
      >
        <ellipse cx="32" cy="38" rx="26" ry="10" fill={Colors.goldSoft} />
        <path
          d="M10 36c4-16 14-24 22-24s18 8 22 24"
          fill="#f0d78c"
          stroke="#c9971a"
          strokeWidth="2"
        />
        <rect x="8" y="34" width="48" height="6" rx="2" fill={Colors.parchmentInk} />
        <circle cx="32" cy="37" r="3" fill={Colors.gold} />
      </svg>
      <span className="logo__text">{siteConfig.brandName}</span>
    </span>
  )
}
