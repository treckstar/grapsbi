import React from 'react'
import techChart from '../assets/tech-chart.png'
//import TechChart from '../assets/tech-chart.inline.png'
import TechChart1 from '../assets/tech-chart-1.inline.svg'
import TechChart2 from '../assets/tech-chart-2.inline.svg'
import TechChart3 from '../assets/tech-chart-3.inline.svg'
import TechChart4 from '../assets/tech-chart-4.inline.svg'

import cx from 'classnames'
import { spinnerContainer, isRelative, spinnerBase, isBlock, mxAuto, spinnerLayer, layer1, layer2, layer3, layer4 } from './image-spinner.module.scss'

export default function ImageSpinner () {
    return (
        <div className={spinnerContainer}>
            <img
                src={techChart}
                className={cx(isRelative, spinnerBase, isBlock, mxAuto)}
                width="150"
                height="150"
                alt="spinner layer"
            />
            {/* <TechChart
                className={cx(isRelative, spinnerBase, isBlock, mxAuto)}
                width="150"
                height="150"
                alt="spinner layer"
            /> */}
            <TechChart1
                className={cx(spinnerLayer, layer1, isBlock, mxAuto)}
                width="150"
                height="150"
                alt="spinner layer"
            />
            <TechChart3
                className={cx(spinnerLayer, layer2, isBlock, mxAuto)}
                width="150"
                height="150"
                alt="spinner layer"
            />
            <TechChart4
                className={cx(spinnerLayer, layer3, isBlock, mxAuto)}
                width="150"
                height="150"
                alt="spinner layer"
            />
            <TechChart2
                className={cx(spinnerLayer, layer4, isBlock, mxAuto)}
                width="150"
                height="150"
                alt="spinner layer"
            />
        </div>
    )
}
