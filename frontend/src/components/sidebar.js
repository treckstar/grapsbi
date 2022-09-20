import React from "react"
import Links from "../constants/linksaside"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import cx from 'classnames'
import {
  sidebar,
  showSidebar,
  sidebarLinks,
  sidebarIcons,
  closeBtn
} from './sidebar.module.scss';
const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <aside className={` ${isOpen ? cx(sidebar, showSidebar) : sidebar}`}>
      <button
        aria-label="Close Button"
        className={closeBtn}
        onClick={toggleSidebar}
      >
        <FaTimes />
      </button>
      <div>
        <Links
          aria-label="Sidebar Links"
          styleClass=""
        />
        <SocialLinks
          aria-label="Social Links"
          styleClass="sidebar-icons"
        />
      </div>
    </aside>
  )
}

export default Sidebar
