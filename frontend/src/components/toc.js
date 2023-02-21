import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import cx from "classnames"
import { tableOfContents, tableOfContentsWrapper} from './toc.module.scss'


const Toc = ({ blocks }) => {
    return (
        <div className={tableOfContents}>
            <div className={tableOfContentsWrapper}>
                {blocks.map((block) => {
                    console.log(block)
                })}
            </div>
        </div>
    )
}

export default Toc