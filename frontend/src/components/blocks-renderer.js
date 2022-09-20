import React from "react"
import { graphql } from "gatsby"
import BlockRichText from "./block-rich-text"
import BlockMedia from "./block-media"
import BlockQuote from "./block-quote"
import BlockSlider from "./block-slider"
//import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'



const componentsMap = {
  STRAPI__COMPONENT_SHARED_RICH_TEXT: BlockRichText,
  STRAPI__COMPONENT_SHARED_MEDIA: BlockMedia,
  STRAPI__COMPONENT_SHARED_QUOTE: BlockQuote,
  STRAPI__COMPONENT_SHARED_SLIDER: BlockSlider,
}

const Block = ({ block }) => {
  //deckDeckGoHighlightElement()

  const Component = componentsMap[block.__typename]

  if (!Component) {
    return null
  }

  return <Component data={block} />
}

const BlocksRenderer = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => (
        <Block key={`${index}${block.__typename}`} block={block} />
      ))}
    </div>
  )
}

export const query = graphql`
  fragment Blocks on STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTSTRAPI__COMPONENT_SHARED_SLIDERUnion {
    __typename
    ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
      richTextBody: body {
        __typename
        data {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_MEDIA {
      file {
        mime
        localFile {
          url
          publicURL
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_QUOTE {
      title
      quoteBody: body
      cite
    }
    ... on STRAPI__COMPONENT_SHARED_SLIDER {
      files {
        id
        mime
        localFile {
          url
          publicURL
          childImageSharp {
            gatsbyImageData(blurredOptions: {toFormat: AUTO})
          }
        }
      }
    }
  }
`

export default BlocksRenderer
