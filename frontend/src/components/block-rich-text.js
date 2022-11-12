import React from "react"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

const BlockRichText = ({ data }) => {
  deckDeckGoHighlightElement()
  
  return (
    <>
    <div className="sticky top-0 left-0"
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.tableOfContents,
        }}
    />
    <div className="prose max-h-fit mx-auto py-2" 
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
    />
    </>
  )
}

export default BlockRichText
