import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
      <Layout>
        <SEO title="Aboutページ" description="Aboutページです。" />
        <div className="container mx-auto text-center">
          <h1 className="text-left">Aboutページ</h1>
          <StaticImage
            className=""
            src="../images/1163.jpg"
            alt="toppage"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Layout>
    </>
  )
}

export default About
