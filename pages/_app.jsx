import { ParallaxProvider } from 'react-scroll-parallax'
import '@code-hike/scrollycoding/dist/index.css'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}
