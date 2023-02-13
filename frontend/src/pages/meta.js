import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title";
import BlocksRenderer from "../components/blocks-renderer"
import Headings from '../components/headings'
import PageHeading from '../components/page-heading'

import cx from 'classnames'
import {
  page,
  pageCenter,
  sectionCenter,
  pageText,
  pageImg,
  pageLeftH3,
  underline
} from './page.module.scss';



const MetaPage = () => {
  const { strapiMeta } = useStaticQuery(graphql`
    query {
      strapiMeta {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { metaTitle, blocks } = strapiMeta

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Meta", metaDescription: "The coolest current sick trends." }} />
      <PageHeading />
      <section className={page}>
        <div className={cx(sectionCenter, pageCenter)}>
            <StaticImage
            src="../assets/icons.inline.svg"
            alt="iconz"
            className={pageImg}
            placeholder="blurred"
          />
          <article className={pageText}>
            <Title cssName={pageLeftH3} cssUnderline={underline} title={strapiMeta.title} />

            <BlocksRenderer blocks={blocks} />
          </article>
        </div>
        
      </section>
      
    </Layout>
  )
}

export default MetaPage
