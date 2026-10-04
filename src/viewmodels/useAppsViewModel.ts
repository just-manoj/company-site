import { apps, appsCopy } from '../config/siteConfig'

export function useAppsViewModel() {
  return {
    copy: appsCopy,
    apps,
  }
}
