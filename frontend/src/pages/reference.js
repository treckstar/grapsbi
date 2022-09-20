import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title";
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"
import {
    page,
    pageCenter,
    sectionCenter,
    pageText,
    pageImg,
    pageLeftH3,
    underline,
} from './page.module.scss'
const ReferencePage = () => {
  const { strapiReference } = useStaticQuery(graphql`
    query {
      strapiReference {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { referenceTitle, blocks } = strapiReference

  const seo = {
    metaTitle: referenceTitle,
    metaDescription: referenceTitle,
  }

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Reference", metaDescription: "The coolest current hip trends." }} />
      <section className="about-page">
        <div className="section-center about-center">
          <article className="about-text">
            <Title title={strapiReference.title} />
          </article>
        </div>
        <div className="section">
          <article className="about-text">
            <BlocksRenderer blocks={blocks} />
          </article>
        </div>
      </section>
      
    </Layout>
  )
}

export default ReferencePage
