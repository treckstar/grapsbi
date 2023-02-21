import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Tech from '../components/tech'
import Services from "../components/services"
import ChartRadar from "../components/chart-radar"
import Jobs from "../components/jobs"
import Projects from '../components/projects'

const IndexPage = () => {
  const { allStrapiArticle, allStrapiProject, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      allStrapiProject(sort: {order: DESC, fields: strapi_id}) {
        nodes {
          id
          title
          description
          image {
            alternativeText
            name
            strapi_id
            localFile {
              url
              publicURL
              childImageSharp {
                gatsbyImageData(blurredOptions: {toFormat: AUTO})
              }
            }
            url
          }
          desc {
            id
            name
            strapi_id
          }
          featured
          github
          strapi_id
          url
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  return (
    <Layout>
      <Seo />
      <Hero />
      <Tech />
      <Services />
      <ChartRadar />
      <Jobs />
      <Projects title="Featured Projects" showLink="true" projects={allStrapiProject.nodes} />
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
