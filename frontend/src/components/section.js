import React from "react";
import cx from 'classnames'
import { section, sectionCenter, bgGray } from './section.module.scss'


const Section = ({ cssName, children }) => {
    return(
        <section className={cx(section, cssName)}>
            {children}
        </section>
    )
    }

export default Section
