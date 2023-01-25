import '@code-hike/scrollycoding/dist/index.css'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/global.scss'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}
