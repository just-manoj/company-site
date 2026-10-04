export function OceanHero() {
  return (
    <div className="ocean-hero" aria-hidden="true">
      <div className="ocean-hero__sky">
        <span className="ocean-hero__moon" />
        <span className="ocean-hero__star ocean-hero__star--1" />
        <span className="ocean-hero__star ocean-hero__star--2" />
        <span className="ocean-hero__star ocean-hero__star--3" />
        <span className="ocean-hero__cloud ocean-hero__cloud--1" />
        <span className="ocean-hero__cloud ocean-hero__cloud--2" />
      </div>

      <div className="ocean-hero__sea">
        <span className="ocean-hero__island ocean-hero__island--left" />
        <span className="ocean-hero__island ocean-hero__island--right" />
        <span className="ocean-hero__ship" />
        <span className="ocean-hero__hat" />
        <span className="ocean-hero__wave ocean-hero__wave--1" />
        <span className="ocean-hero__wave ocean-hero__wave--2" />
      </div>

      <svg className="ocean-hero__compass" viewBox="0 0 200 200" width="180" height="180">
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(232,197,106,0.18)" strokeWidth="2" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(232,197,106,0.12)" strokeWidth="1" />
        <path d="M100 20 L108 100 L100 180 L92 100 Z" fill="rgba(232,197,106,0.2)" />
        <path d="M20 100 L100 92 L180 100 L100 108 Z" fill="rgba(232,197,106,0.12)" />
      </svg>
    </div>
  )
}
