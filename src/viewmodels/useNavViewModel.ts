import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { footerLegalLinks, navItems } from '../config/siteConfig'

// ViewModel: keeps menu open/close logic out of the Header view
export function useNavViewModel() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const location = useLocation()
  const navigate = useNavigate()

  const openMenu = (): void => {
    setIsMenuOpen(true)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  const goTo = (path: string): void => {
    navigate(path)
    setIsMenuOpen(false)
  }

  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    goTo,
    isActive,
    navItems,
    footerLegalLinks,
    currentPath: location.pathname,
  }
}
