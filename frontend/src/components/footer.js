import React from "react";
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks";
import { GrGatsbyjs } from "@react-icons/all-files/gr/GrGatsbyjs";
import { SiStrapi } from "@react-icons/all-files/si/SiStrapi";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import cx from 'classnames'
import {
  footer,
  footerH5,
  footerH5Span,
  footerH5Svg,
  footerSvg,
  footerLinks,
  footerSocialLink
} from './footer.module.scss';
const Footer = () => {
  return (
    <footer aria-label="Footer" className={`footer ${footer}`}>
      <div>
        <SocialLinks
          aria-label="Social Links"
          styleClass="footer-links"
          className={`footer-links ${footerLinks}`}
        ></SocialLinks>
        <h5 className={footerH5}>
          &copy; {new Date().getFullYear()},<Link to="https://www.treckstar.net/" className={footerSocialLink} target="_blank"><span className={footerH5Span}> treckstar.net. </span></Link> Built with{" "}
          <GrGatsbyjs title="GatsbyJs" className={footerH5Svg} />{"  "}<SiStrapi title="Strapi CMS" className={footerH5Svg}  /> and <FaReact title="ReactJs" className={footerH5Svg}  />
          <br />
          Theme by  <Link to="https://www.johnsmilga.com/" className={footerSocialLink} target="_blank"><span className={footerH5Span}>John Smilga</span></Link>
        </h5>
        
      </div>
    </footer>
  );
};

export default Footer;
