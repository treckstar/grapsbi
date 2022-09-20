/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaSketch } from "@react-icons/all-files/fa/FaSketch";
import { FaAndroid } from "@react-icons/all-files/fa/FaAndroid";
import cx from 'classnames'
import { serviceIcon } from '../components/services.module.scss';

export default [
  {
    id: 1,
    icon: <FaCode className={`inline ${serviceIcon}`} />,
    title: "front-end web development",
    text: `During the 10 years of using an extensive list of front-end technologies, my skills have been constantly challenged and put to the test. 
    As far back as IE 7 compatibility requirements, I have always maintained an in-depth knowledge of responsive, WCAG, compatible code.`,
  },
  {
    id: 2,
    icon: <FaSketch className={`inline ${serviceIcon}`} />,
    title: "back-end development",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid className={`inline ${serviceIcon}`} />,
    title: "server administrator",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]
