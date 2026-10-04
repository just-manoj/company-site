import { aboutCopy, values } from '../config/siteConfig'

export function useAboutViewModel() {
  return {
    copy: aboutCopy,
    values,
  }
}
