import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import LogoImg from "../assets/treckstar-dot-net-plain.inline.svg"
import logoSrc from "../assets/star-logo-trans-trim.png"
import logoTextSrc from '../assets/text-url.png'
import PageLinks from "../constants/links"
import cx from "classnames"
import {
  logo,
  newLogo,
  textLogoWrapper,
  textLogoWrapperDone,
  navBar,
  navCenter,
  navHeader,
  toggleBtn,
  navLinks,
  navLinksA,
  navLinksLi,
  gatsbyImageWrapper
} from "./navbar.module.scss"
import { FaAlignRight } from "@react-icons/all-files/fa/FaAlignRight"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={navBar}>
      <div className={navCenter}>
        <div className={navHeader}>
          <div className={textLogoWrapper}>
            <Link to="/">
              <img className={newLogo} src={logoSrc} alt="treckstar dot net Logo Graphic" width="45" height="45" />
              <img className={newLogo} src={logoTextSrc} alt="treckstar dot net Text Graphic" height="30"  />
            </Link>
            {/* <img className={cx(logo, textLogo)} src={logoSrc} alt="logo" /> */}
          </div>
          <button
            type="button"
            className={toggleBtn}
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks
          aria-label="Navigation Links"
          styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
