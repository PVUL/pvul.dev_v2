import Meta from './meta'
import { NavBar } from './new/NavBar'

export default function Layout({ children }) {
  return (
    <section className="flex flex-col min-h-screen overflow-x-hidden">
      <Meta />
      <NavBar />
      <main className="xl:ml-64">{children}</main>
    </section>
  )
}
