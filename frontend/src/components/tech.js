import React from 'react'
import { Image } from 'gatsby'
import cx from 'classnames'
import Vue3Icon from '../assets/icons/vue.inline.svg'

import { motion } from 'framer-motion'
import {
    showHoverAnimation,
    removeHoverAnimation,
} from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/FramerMotionVariants'

const technology = [
    {
        name: 'Vue 3',
        desc: 'Vue 3 and its powerful composition API makes your experience pleasant.',
        icon: '../assets/icons/vue.inline.svg',
    },
    // More people...
]

export default function Skills() {
    return (
        <div className="bg-teal-700 py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Technology
                    </h2>
                </div>
                <motion.ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    viewport={{ once: true }}>
                    
                    {technology.map((tech) => (
                        <motion.li
                            key={tech.name}
                            title={tech.name}
                            variants={popUp}
                            key={tech.name}
                            onMouseMove={(e) => showHoverAnimation(e)}
                            onMouseLeave={(e) => removeHoverAnimation(e)}
                            className="bg-teal-800 hover:bg-teal-700 dark:bg-darkPrimary group origin-center transform items-center justify-center gap-4 border-solid rounded-2xl hover:border-white dark:border-neutral-700 hover:rounded-2xl hover:dark:bg-darkSecondary p-4">
                            <div className="bg-transparent hover:border-teal-900 pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100  p-4">
                                <div className="bg-transparent mx-auto">
                                    <Vue3Icon width="64" height="64" />
                                </div>
                                <h3 className="bg-transparent mt-6 font-poppins font-semibold leading-7 tracking-tight text-white text-lg">
                                    {tech.name}
                                </h3>
                                <p className="bg-transparent text-sm leading-6 text-gray-400">
                                    {tech.desc}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}
