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
  console.log(article)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }

  return (
      <Layout as="article">
          <Seo seo={seo} />
          <nav className="supports-backdrop-blur:bg-white/30 sticky top-0 z-40 w-full flex-none bg-slate-100/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-emerald-100/10 lg:z-50 lg:border-b lg:border-t lg:border-slate-900/10">
              <div className="mx-4 border-y border-slate-900/10 py-4 dark:border-slate-300/30 lg:mx-0 lg:border-0 lg:px-8">
                  <div className="block w-full flex-grow sm:flex sm:w-auto sm:items-center">
                      <div className="container mx-auto mt-0 flex w-full flex-col items-center justify-center px-6 py-2 text-sm font-bold  sm:flex-row">
                          <button
                              className="testt2 mx-2 flex items-center rounded-md bg-white py-[0.6375rem] px-[1.243rem] text-sm font-semibold shadow transition-transform lg:pr-3"
                              id="headlessui-tabs-tab-67"
                              role="tab"
                              type="button"
                              aria-selected="true"
                              tabIndex="0"
                              aria-controls="headlessui-tabs-panel-69">
                              Front end
                          </button>

                          <button
                              className="testt mx-2 flex items-center rounded-md bg-emerald-400 py-[0.6375rem] px-[1.243rem] text-sm font-semibold shadow transition-transform lg:pr-3 text-white"
                              id="headlessui-tabs-tab-67"
                              role="tab"
                              type="button"
                              aria-selected="true"
                              tabIndex="0"
                              aria-controls="headlessui-tabs-panel-69">
                              Back end
                          </button>

                          <div
                              className="relative top-0 left-0 flex w-auto mx-2 justify-center bg-transparent"
                              style={{ transform: 'translateZ(900px)' }}>
                              <div className="wrappy relative top-0 left-0 inline-block w-auto bg-transparent">
                                  <span className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-transparent shadow opacity-0"></span>
                                  <div className="testt3 z-10 absolute top-0 left-0 flex h-full w-full items-center rounded-md bg-white shadow transition-transform">
                                      <div className="relative z-20 top-0 left-0 h-full w-full bg-transparent"></div>
                                  </div>
                                  <a
                                      href="#"
                                      className="relative z-30 top-0 left-0 inline-block h-full w-full py-[0.6375rem] px-[1.243rem] text-sm font-semibold bg-transparent transition-transform"
                                      style={{
                                          transform: 'translateZ(1000px)',
                                      }}>
                                      Full stack
                                  </a>
                              </div>
                          </div>

                          <div
                              className="relative top-0 left-0 flex w-auto mx-2 justify-center bg-transparent"
                              style={{ transform: 'translateZ(900px)' }}>
                              <div className="wrappy relative top-0 left-0 inline-block w-auto bg-transparent">
                                  <span className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-transparent shadow opacity-0"></span>
                                  <div className="testt3 z-10 absolute top-0 left-0 flex h-full w-full items-center rounded-md bg-purple-700 shadow transition-transform">
                                      <div className="relative z-20 top-0 left-0 h-full w-full bg-transparent"></div>
                                  </div>
                                  <a
                                      href="#"
                                      className="relative z-30 top-0 left-0 inline-block h-full w-full py-[0.6375rem] px-[1.243rem] text-sm font-semibold bg-transparent text-white transition-transform"
                                      style={{
                                          transform: 'translateZ(1000px)',
                                      }}>
                                      Tutorials
                                  </a>
                              </div>
                          </div>

                          <div
                              className="relative top-0 left-0 flex w-auto mx-2 justify-center bg-transparent"
                              style={{ transform: 'translateZ(900px)' }}>
                              <div className="wrappy relative top-0 left-0 inline-block w-auto bg-transparent">
                                  <span className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-transparent shadow opacity-0"></span>
                                  <div className="testt3 z-10 absolute top-0 left-0 flex h-full w-full items-center rounded-md bg-white shadow transition-transform">
                                      <div className="relative z-20 top-0 left-0 h-full w-full bg-transparent"></div>
                                  </div>
                                  <a
                                      href="#"
                                      className="relative z-30 top-0 left-0 inline-block h-full w-full py-[0.6375rem] px-[1.243rem] text-sm font-semibold bg-transparent transition-transform"
                                      style={{
                                          transform: 'translateZ(1000px)',
                                      }}>
                                      Opinion
                                  </a>
                              </div>
                          </div>

                          <div
                              className="relative top-0 left-0 flex w-auto mx-2 justify-center bg-transparent"
                              style={{ transform: 'translateZ(900px)' }}>
                              <div className="wrappy relative top-0 left-0 inline-block w-auto bg-transparent">
                                  <span className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-transparent shadow opacity-0"></span>
                                  <div className="testt3 z-10 absolute top-0 left-0 flex h-full w-full items-center rounded-md bg-green-700 shadow transition-transform">
                                      <div className="relative z-20 top-0 left-0 h-full w-full bg-transparent"></div>
                                  </div>
                                  <a
                                      href="#"
                                      className="relative z-30 top-0 left-0 inline-block h-full w-full py-[0.6375rem] px-[1.243rem] text-sm font-semibold bg-transparent text-white transition-transform"
                                      style={{
                                          transform: 'translateZ(1000px)',
                                      }}>Design</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
          <main className="bg-white pt-8 pb-16 dark:bg-gray-900 lg:pt-16 lg:pb-24">
              <div className="mx-auto flex justify-between px-4">
                  <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full ">
                      <header className="not-format mb-4 lg:mb-6 max-w-screen-xl mx-auto grid grid-cols-2 gap-4 flex align-center justify-center items-center">
                          <div className="title-side">
                              <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-5xl">
                                  {article.title}
                              </h1>
                              <address className="mb-6 flex items-center not-italic">
                                  <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                                      <img
                                          className="mr-4 h-16 w-16 rounded-full"
                                          src={
                                              article.author.avatar?.localFile
                                                  .publicURL
                                          }
                                          alt={
                                              article.author.avatar
                                                  ?.alternativeText
                                          }
                                          key={article.id}
                                      />
                                      <div>
                                          <a
                                              href="#"
                                              rel="author"
                                              className="text-xl font-bold text-gray-900 dark:text-white">
                                              {article.author.name}
                                          </a>
                                          <p className="text-base font-light text-gray-500 dark:text-gray-400 my-0">
                                              {article.author.title}
                                          </p>
                                          <p className="text-base font-light text-gray-500 dark:text-gray-400 my-0">
                                              <time
                                                  pubdate="true"
                                                  dateTime="{article.publishedAt}"
                                                  title="{article.publishedAt}">
                                                  {article.publishedAt}
                                              </time>
                                          </p>
                                      </div>
                                  </div>
                              </address>
                          </div>
                          <div className="image-side text-center">
                              <img
                                  src={article.cover?.localFile.publicURL}
                                  alt={` ${article.cover?.alternativeText}`}
                                  key={article.id}
                              />
                          </div>
                      </header>

                      <div className="blog-content pt-0 max-w-3xl mx-auto ">
                          <hr className="my-6" />
                          <p className="dark:text-white lead text-xl">
                              {article.description}
                          </p>
                          <BlocksRenderer blocks={article.blocks || []} />
                      </div>
                  </article>
              </div>
          </main>
      </Layout>
  )

}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
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
`

export default ArticlePage