/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import cx from 'classnames'

const data = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/treckstar/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/treckstar",
  },
  {
    id: 3,
    icon: <FaStackOverflow />,
    url: "https://stackoverflow.com/users/1712345/treckstar",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    url: "https://www.twitter.com/treckstar",
  },
]
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? cx(styleClass) : ""}`}>{links}</ul>
  )
}
