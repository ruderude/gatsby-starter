import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto text-center">
          <Link to="/" className="hover:text-gray-900">
            © 2021 Footer — フッターです
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
