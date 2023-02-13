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
    pageCenterH3,
    underline,
} from './page.module.scss'

const ChangelogPage = () => {
  const { strapiChangelog } = useStaticQuery(graphql`
    query {
      strapiChangelog {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { changelogTitle, blocks } = strapiChangelog

  const seo = {
    metaTitle: changelogTitle,
    metaDescription: changelogTitle,
  }

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Changelog", metaDescription: "The coolest current hip trends." }} />
      <section className="about-page">
        <div className="section-center">
          <article className="">
            <Title cssName={pageCenterH3} cssUnderline={underline} title={strapiChangelog.title} />

            <BlocksRenderer blocks={blocks} />
          </article>
        </div>
      </section>
      
    </Layout>
  )
}

export default ChangelogPage
