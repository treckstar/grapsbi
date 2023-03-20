import React from 'react'

import { StaticImage, getSrc, GatsbyImage} from 'gatsby-plugin-image'
import cx from 'classnames'

import { motion } from 'framer-motion'
import {
    showHoverAnimation,
    removeHoverAnimation
} from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/FramerMotionVariants'
import VueIcon from '../assets/icons/vue.inline.svg'
import ReactIcon from '../assets/icons/react.inline.svg'
import VercelIcon from '../assets/icons/vercel.inline.svg'
import TailwindCssIcon from '../assets/icons/tailwindcss.inline.svg'
import TypescriptIcon from '../assets/icons/typescript.inline.svg'
const technology = [
    {
        name: 'Vue 3',
        desc: 'Vue 3 and its powerful composition API makes your experience pleasant.',
        icon: <VueIcon width="64" height="64" />,
    },
    {
        name: 'React',
        desc: 'React ',
        icon: <ReactIcon width="64" height="64" />,
    },
    {
        name: 'Next',
        desc: 'Next js  ',
        icon: <VercelIcon width="64" height="64" />,
    },
    {
        name: 'Tailwind CSS',
        desc: 'Tailwind CSS',
        icon: <TailwindCssIcon width="64" height="64" />,
    },
    {
        name: 'Typescript',
        desc: 'Typescript',
        icon: <TypescriptIcon width="64" height="64" />,
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
                            ss
                            variants={popUp}
                            key={tech.name}
                            onMouseMove={(e) => showHoverAnimation(e)}
                            onMouseLeave={(e) => removeHoverAnimation(e)}
                            className="bg-teal-800 hover:bg-teal-700 dark:bg-darkPrimary group origin-center transform items-center justify-center gap-4 border-solid rounded-2xl hover:border-white dark:border-neutral-700 hover:rounded-2xl hover:dark:bg-darkSecondary p-4">
                            <div className="bg-transparent hover:border-teal-900 pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100  p-4">
                                <div className="bg-transparent mx-auto">
                                    {tech.icon}
                                </div>
                                <h3 className=" bg-gradient-to-b from-slate-300 to-slate-200 mb-8 bg-clip-text tracking-tight text-transparent bg-transparent mt-6 font-poppins font-semibold text-md">
                                    {tech.name}
                                </h3>
                                <p className="bg-gradient-to-b from-gray-300 to-gray-200 mb-8 bg-clip-text tracking-tight text-transparent bg-transparent mt-6 font-poppins font-semibold text-sm">
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
