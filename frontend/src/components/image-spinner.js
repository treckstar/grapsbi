import React from 'react'
import techChart from '../assets/tech-chart.png'
//import TechChart from '../assets/tech-chart.inline.png'
import TechChart1 from '../assets/tech-chart-1.inline.svg'
import TechChart2 from '../assets/tech-chart-2.inline.svg'
import TechChart3 from '../assets/tech-chart-3.inline.svg'
import TechChart4 from '../assets/tech-chart-4.inline.svg'

import cx from 'classnames'
import { spinnerContainer, spinnerBase, isBlock, mxxAuto, spinnerLayer, layer1, layer2, layer3, layer4 } from './image-spinner.module.scss'

export default function ImageSpinner () {
    return (
        <div className={spinnerContainer}>
            <img
                src={techChart}
                className={cx(spinnerBase, isBlock, mxxAuto)}
                width="445"
                height="445"
                alt="spinner layer"
            />
            {/* <TechChart
                className={cx(isRelative, spinnerBase, isBlock, mxxAuto)}
                width="445"
                height="445"
                alt="spinner layer"
            /> */}
            <TechChart1
                className={cx(spinnerLayer, layer1, isBlock, mxxAuto)}
                width="445"
                height="445"
                alt="spinner layer"
            />
            <TechChart3
                className={cx(spinnerLayer, layer2, isBlock, mxxAuto)}
                width="445"
                height="445"
                alt="spinner layer"
            />
            <TechChart4
                className={cx(spinnerLayer, layer3, isBlock, mxxAuto)}
                width="445"
                height="445"
                alt="spinner layer"
            />
            <TechChart2
                className={cx(spinnerLayer, layer4, isBlock, mxxAuto)}
                width="445"
                height="445"
                alt="spinner layer"
            />
        </div>
    )
}
