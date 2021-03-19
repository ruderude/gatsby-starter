import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Other = () => {
  return (
    <>
      <Layout>
        <SEO title="Otherページ" description="Otherページです。" />
        <div className="container mx-auto text-center">
          <h1 className="text-left">Otherページ</h1>
          <StaticImage
            className=""
            src="../images/animal_stand_neko.png"
            alt="toppage"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Layout>
    </>
  )
}

export default Other
