type ButtonProps = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'ghost'
}

export function Button({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
