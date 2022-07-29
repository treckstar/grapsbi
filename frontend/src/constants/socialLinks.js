/* eslint-disable import/no-anonymous-default-export */
import React from "react"
// import {
//   FaFacebookSquare,
//   FaLinkedin,
//   FaDribbbleSquare,
//   FaBehanceSquare,
//   FaTwitterSquare,
// } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: "",
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: "",
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: "",
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: "",
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: "",
    url: "https://www.twitter.com",
  },
]
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
