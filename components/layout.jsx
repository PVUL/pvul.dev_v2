import Meta from './meta'
import { Header } from './new/Header'

export default function Layout({ children }) {
  return (
    <section className="flex flex-col min-h-screen overflow-x-hidden">
      <Meta />
      <Header />
      <main className="xl:ml-64">{children}</main>
    </section>
  )
}
