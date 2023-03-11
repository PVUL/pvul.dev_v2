import Meta from './meta'
import { Footer } from './new/Footer'
import { NavBar } from './new/NavBar'

export default function Layout({ children }) {
  return (
    <section className="flex flex-col min-h-screen overflow-x-hidden">
      <Meta />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </section>
  )
}
