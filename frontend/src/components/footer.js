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
import { XMarkIcon } from '@heroicons/react/20/solid'

const Notif = () => {
    return (
        <>
            {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
                <div className="pointer-events-auto flex items-center justify-between gap-x-6 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4 bg-slate-900/30 backdrop-blur">
                    <p className="font-poppins text-slate-300 m-0 hover:text-slate-100">
                        <a href="#">
                            <strong className="font-semibold">Note</strong>
                            <svg
                                viewBox="0 0 2 2"
                                className="mx-2 inline h-0.5 w-0.5 fill-current"
                                aria-hidden="true">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            This site is a staging site and is not complete /
                            only used for testing&nbsp;
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </p>
                    <button
                        type="button"
                        className="-m-1.5 flex-none p-1.5 mb-0 relative top-[7px] ">
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon
                            className="h-5 w-5 text-slate-300 hover:text-slate-100"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

const Footer = () => {
  return (
    <>
      <Notif />
    <footer aria-label="Footer" className={`footer ${footer}`}>
      <div>
        <SocialLinks
          aria-label="Social Links"
          styleClass="footer-links"
          className={`footer-links ${footerLinks}`}
        ></SocialLinks>
        <h5 className={footerH5}>
          &copy; {new Date().getFullYear()},
          <a href="https://www.treckstar.net/" className={footerSocialLink} target="_blank">
            <span className={footerH5Span}> treckstar.net. </span>
          </a> 
          Built with{" "}
          <GrGatsbyjs title="GatsbyJs" className={footerH5Svg} />{"  "}
          <SiStrapi title="Strapi CMS" className={footerH5Svg}  /> and 
          <FaReact title="ReactJs" className={footerH5Svg}  />
          <br />
          Theme by  <a href="https://www.johnsmilga.com/" className={footerSocialLink} target="_blank">
            <span className={footerH5Span}>John Smilga</span>
          </a>
        </h5>
        
      </div>
    </footer>
    </>
  );
};

export default Footer;
