import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title";
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"

const AboutPage = () => {
  const { strapiAbout } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { aboutTitle, blocks } = strapiAbout

  const seo = {
    metaTitle: aboutTitle,
    metaDescription: aboutTitle,
  }

  return (
    <Layout>
      <Seo seo={{ metaTitle: "About", metaDescription: "The coolest current hip trends." }} />
      <section className="about-page">
        <div className="section-center about-center">
          <article className="about-text">
            <Title className="text-left" title={strapiAbout.title} />

            <BlocksRenderer blocks={blocks} />
          </article>
        </div>
        
      </section>
      
    </Layout>
  )
}

export default AboutPage
