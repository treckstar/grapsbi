import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ImageSpinner from './image-spinner'
import cx from 'classnames'
import { pageHeadingBackground } from './page-heading.module.scss'

const PageHeading = ({}) => {
    return (
        <div className={`section is-darker ${pageHeadingBackground}`}>
            <div className="side-section py-6 z-1 is-inverted">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="column is-5">
                            <h3 className="pb-4 subtitle is-5 is-bold">
                                <span className="ff-sec  text-gradient text-5xl">TOP 3%</span>
                            </h3>
                            <h2 className="ff-sec is-inverted title is-2 text-3xl is-bold">
                                A High-Performing Senior Elite Team
                            </h2>
                            <p className="paragraph rem-115 mb-4 is-inverted">
                                Partner with our advertising experts to save
                                time, boost performance, and meet your
                                milestones on your growth journey.
                            </p>
                            <a href="/" className="rem-115">
                                <span className="action-link">Learn more</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    arria-hidden="true"
                                    role="img"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    dataicon="feather:arrow-right"
                                    className="iconify iconify--feather">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 12h14m-7-7l7 7l-7 7"></path>
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
    )
}

export default PageHeading
