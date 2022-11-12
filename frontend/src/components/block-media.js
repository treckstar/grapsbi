import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import cx from 'classnames'


const BlockMedia = ({ data }) => {
  const isVideo = data.file.mime.startsWith("video")

  return (
    <div className="py-8">
      {isVideo ? (
        <p>TODO video</p>
      ) : (
        <img 
          src={data.file.localFile.publicURL}
          alt={` ${data.file.alternativeText}`}
          
        />
      )}
    </div>
  )
}

export default BlockMedia
