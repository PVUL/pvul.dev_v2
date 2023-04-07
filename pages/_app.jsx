import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { ParallaxProvider } from 'react-scroll-parallax'
import '@code-hike/scrollycoding/dist/index.css'
import 'prism-themes/themes/prism-synthwave84.css'

import '../styles/global.scss'
import { GA_TRACKING_ID, pageview, event } from '../lib/gtag'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // log page view to google analytics
    const handleRouteChange = (url) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}
