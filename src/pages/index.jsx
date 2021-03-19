import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="トップページ" description="トップページです。" />
        <div className="container mx-auto text-center">
          <h1 className="text-left">トップページ</h1>
          <StaticImage
            className=""
            src="../images/696.jpg"
            alt="toppage"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
