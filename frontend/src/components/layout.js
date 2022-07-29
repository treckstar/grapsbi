import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
