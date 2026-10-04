import { Link } from 'react-router-dom'
import { footerLegalLinks, navItems, siteConfig } from '../config/siteConfig'
import { StrawHatLogo } from './StrawHatLogo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <StrawHatLogo />
          <p className="footer__tagline">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="footer__heading">Pages</h3>
          <ul className="footer__list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Legal</h3>
          <ul className="footer__list">
            {footerLegalLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        © {siteConfig.year} {siteConfig.companyName}
      </p>
    </footer>
  )
}
