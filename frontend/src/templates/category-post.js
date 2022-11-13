import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Title from '../components/title'
import Layout from '../components/layout'
import BlocksRenderer from '../components/blocks-renderer'
import Seo from '../components/seo'
import ArticlesGrid from '../components/articles-grid'

const CategoryPage = ({ data }) => {
    const category = data.strapiCategory
    const articles = data.allStrapiArticle.nodes
    console.log(articles)

    return (
        <Layout>
            <Seo title={category.name} description={category.description} />
            <section className="blog-page">
                <ArticlesGrid articles={articles} title={category.name} />
            </section>
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($slug: String) {
        strapiCategory(slug: { eq: $slug }) {
            name
        }
        allStrapiArticle(
            filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
        ) {
                nodes {
                    id
                    strapi_id
                    slug
                    title
                    description
                    publishedAt(formatString: "MMM Do, YYYY")
                    blocks {
                        ...Blocks
                    }
                    author {
                        id
                        name
                        email
                        title
                        avatar {
                            alternativeText
                            localFile {
                                url
                                publicURL
                            }
                        }
                    }
                    cover {
                        alternativeText
                        localFile {
                            url
                            publicURL
                        }
                    }
                    categories {
                        name
                        id
                        description
                        slug
                    }
                }
            
        }
    }
`

export default CategoryPage
