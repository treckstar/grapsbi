import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
// ...GatsbyImageSharpFluid

const Category = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
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
      <Seo title="Category" description="Latest Articles by Treckstar" />
      <section className="blog-page">
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </section>
    </Layout>
  )
}

export default Category
