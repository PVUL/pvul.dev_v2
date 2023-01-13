export default function Container({ children }) {
  return (
    <div className="container mx-auto px-7 md:px-10 max-w-screen-870">
      {children}
    </div>
  )
}
