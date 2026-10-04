import { useNavigate } from 'react-router-dom'
import { apps, homeCopy, values } from '../config/siteConfig'

export function useHomeViewModel() {
  const navigate = useNavigate()

  return {
    copy: homeCopy,
    featuredApps: apps,
    values,
    goToApps: (): void => {
      navigate('/apps')
    },
    goToAbout: (): void => {
      navigate('/about')
    },
  }
}
