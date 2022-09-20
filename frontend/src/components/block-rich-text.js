import React from "react"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

const BlockRichText = ({ data }) => {
  deckDeckGoHighlightElement()
  
  return (
    <div className="prose max-h-min max-h-max max-h-fit mx-auto py-2" 
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
    />
  )
}

export default BlockRichText
