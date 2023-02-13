import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title";
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"
import PageHeading from '../components/page-heading2'

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
          <Seo
              seo={{
                  metaTitle: 'About',
                  metaDescription: 'The coolest current hip trends.',
              }}
          />
          <PageHeading
              title={strapiAbout.title}
              subtitle="Senior full-stack web developer for over 10+ years. Experience in monolithic & microservice architectures, software design, Dev Ops, and RDBMS. Currently focused on the Laravel stack, Node Headless CMS stack; primarily React & Vue. Have a demonstrated history using open source frameworks & content management systems, such as; Laravel, Cake PHP, WordPress, and Drupal. Supporting and consulting AWS, & DO platforms, and all types of Headless stacks and infrastructures, specifically Strapi and Contentful. Slight bias in-favor of Tailwind but will always love Bootstrap. Bachelor of Information Science, minor in Management; affixed at the University of Pittsburgh."
          />
          <section className="about-page">
              <div className="section-center">
                  <article className="">
                      <BlocksRenderer blocks={blocks} />
                  </article>
              </div>
          </section>
      </Layout>
  )
}

export default AboutPage
