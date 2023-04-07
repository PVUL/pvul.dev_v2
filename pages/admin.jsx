import { useEffect } from 'react'

import config from '../netlify-cms.config'

/**
 * `/admin`
 */
const AdminPage = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      const UploadCare = (await import('netlify-cms-media-library-uploadcare'))
        .default
      CMS.registerMediaLibrary(UploadCare)
      CMS.init({ config })
      // css file: /public/admin.css
      CMS.registerPreviewStyle('admin.css', { raw: false })
    })()
  }, [])

  return <></>
}

export default AdminPage
