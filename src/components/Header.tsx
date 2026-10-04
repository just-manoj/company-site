import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { useNavViewModel } from '../viewmodels/useNavViewModel'
import { StrawHatLogo } from './StrawHatLogo'

export function Header() {
  const { isMenuOpen, openMenu, closeMenu, goTo, isActive, navItems } =
    useNavViewModel()

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={closeMenu}>
          <StrawHatLogo />
        </Link>

        <nav className="header__nav desktop-only" aria-label="Main">
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              className={`nav-link ${isActive(item.path) ? 'is-active' : ''}`}
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="menu-btn mobile-only"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={isMenuOpen ? closeMenu : openMenu}
        >
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <p className="mobile-menu__brand">{siteConfig.companyName}</p>
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              className={`mobile-menu__link ${isActive(item.path) ? 'is-active' : ''}`}
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
