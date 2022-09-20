import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"
//import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

const ArticlePage = ({ data }) => {
  //deckDeckGoHighlightElement()

  const article = data.strapiArticle

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }

  return (
    <Layout as="article">
      <Seo seo={seo} />
      <section className="blog-template">
        <div className="section-center">
          <header className="container max-w-4xl py-8">
            <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
            <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>
            <GatsbyImage
              image={getImage(article?.cover?.localFile)}
              alt={article?.cover?.alternativeText}
              className="mt-6"
            />
          </header>
          <article className="blog-content">
            <BlocksRenderer blocks={article.blocks || []} />
          </article>
        </div>
      </section>
    </Layout>
  );

}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      strapi_id
      slug
      title
      description
      blocks {
        ...Blocks
      }
      cover {
        alternativeText
        localFile {
          url
          publicURL
        }
      }
    }
  }
`

export default ArticlePage