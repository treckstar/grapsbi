import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import cx from 'classnames'

import {blogNavNavbar, blogNavNavbarBorder, blogNavNavbarBlock, blogNavNavbarContainer, posSticky} from './blog-nav.module.scss'


const BlogNav = ({ children }) => {
    let isStickyClassName = 'sticky' 

    return (
        <nav className={`supports-backdrop-blur:bg-white/30 ${blogNavNavbar}`}>
            <div className={` ${blogNavNavbarBorder}`}>
                <div className={` ${blogNavNavbarBlock}`}>
                    <div className={`mx-auto  ${blogNavNavbarContainer}`}>
                        {children}
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
                                    }}>
                                    Design
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default BlogNav