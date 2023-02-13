import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ImageSpinner from './image-spinner'
import cx from "classnames"
import { pageHeadingBackground } from './page-heading.module.scss'


const PageHeading = ({  }) => {

    return (
        <div className={`section is-darker ${pageHeadingBackground}`}>
    <div className="section-content">
        <div className="container">
            <div className="side-section py-6 z-1 is-inverted">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <h3 className="pb-4 subtitle is-5 is-bold">
                            <span className="text-gradient">TOP 3%</span>
                        </h3>
                        <h2 className="is-inverted title is-2 is-bold">
                        	A High-Performing Senior Elite Team
                    	</h2>
                        <p className="paragraph rem-115 mb-4 is-inverted">
                        Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey.</p>
                        <a href="/" className="rem-115">
                        	<span className="action-link">
                        		Learn more
                        	</span>
                            <svg xmlns="http://www.w3.org/2000/svg" ariaHidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" dataIcon="feather:arrow-right" className="iconify iconify--feather">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="column is-6 is-offset-1 has-text-centered is-relative">
                        <ImageSpinner />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    )
}

export default PageHeading

