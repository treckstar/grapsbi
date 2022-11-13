const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog post
    const articlePost = path.resolve('./src/templates/article-post.js')

    const result = await graphql(
        `
            {
                allStrapiArticle {
                    nodes {
                        title
                        slug
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your Strapi articles`,
            result.errors
        )

        return
    }

    const articles = result.data.allStrapiArticle.nodes

    if (articles.length > 0) {
        articles.forEach((article) => {
            createPage({
                path: `/article/${article.slug}`,
                component: articlePost,
                context: {
                    slug: article.slug,
                },
            })
        })
    }


    const categoryPost = path.resolve('./src/templates/category-post.js')
    const resultc = await graphql(
        `
            {
                allStrapiCategory {
                    nodes {
                        name
                        slug
                    }
                }
            }
        `
    )
    if (resultc.errors) {
        reporter.panicOnBuild(
            `There was an error loading your Strapi categories`,
            resultc.errors
        )
        return
    }
    const categories = resultc.data.allStrapiCategory.nodes
    if (categories.length > 0) {
        categories.forEach((category) => {
            createPage({
                path: `/category/${category.slug}`,
                component: categoryPost,
                context: {
                    slug: category.slug,
                },
            })
        })
    }
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {
                path: require.resolve('path-browserify'),
            },
        },
    })
}
