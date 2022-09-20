import React from "react"
import { Link } from "gatsby"
import LogoImg from "../assets/treckstar-dot-net-plain.inline.svg"
import PageLinks from "../constants/links"
import cx from "classnames"
import {
  logo,
  textLogo,
  textLogoWrapper,
  textLogoWrapperDone,
  navbar,
  navCenter,
  navHeader,
  toggleBtn,
  navLinks,
  navLinksA,
  navLinksLi,
} from "./navbar.module.scss"
import { FaAlignRight } from "@react-icons/all-files/fa/FaAlignRight"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={navbar}>
      <div className={navCenter}>
        <div className={navHeader}>
          <div className={textLogoWrapper}>
            <Link to="/">
              <LogoImg className={cx(logo, textLogo)} />
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
