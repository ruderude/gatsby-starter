import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Link to="/">
            <StaticImage
              src="../images/gatsby-icon.png"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
              width={120}
              height={40}
            />
          </Link>
          <span className="ml-3 text-xl">ヘッダーです</span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/about/" className="mr-5 hover:text-gray-900">
              aboutへ
            </Link>
            <Link to="/other/" className="mr-5 hover:text-gray-900">
              otherへ
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
