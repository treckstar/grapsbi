import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import cx from 'classnames'

import {blog, blogWrapper} from './article-card.module.scss'


const ArticleCard = ({ article }) => {
  console.log(article.cover?.localFile.publicURL);
  console.log(article);
  let delay = (article.strapi_id + 1) * 100

  return (
    <Link
      to={`/article/${article.slug}`}
      // className={`blog ${blogWrapper}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md mb-3 blog"
      key={article.id}
      aria-label="Blog Links">
      <article>
      <img 
        src={article.cover?.localFile.publicURL}
        alt={article.cover?.alternativeText}
        key={article.id}
      />
      <div className="blog-card">
          <h3 className="font-bold text-neutral-700">{article.title}</h3>
          <p>{article.description}</p>
          <div className="blog-footer blog-stack">
            {/* {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>;
            })} */}<span>Category</span><span>Tag</span>
            <p>{article.publishedAt}</p>
          </div>
        </div>
      {/* <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700"></h3>
        <p className="mt-2 text-neutral-500 line-clamp-2">
          
        </p>
      </div> */}
      </article>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    slug
    title
    description
    strapi_id
    publishedAt(formatString: "MMM Do, YYYY h:mm a")
    cover {
      alternativeText
      localFile {
          url
          publicURL
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77)
          }
        }
    }
  }
`

export default ArticleCard
