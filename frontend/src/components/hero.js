import React, { useRef, useEffect} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { TextLoop } from "react-text-loop-next"
import SocialLinks from "../constants/socialLinks"
import Button from "./button"
import cx from 'classnames'
import {hero, heroHeadline, heroImg, heroImgNew, heroSvg, heroSvgNew, heroHidden, heroCenter, heroInfo, heroSubHeadline, heroNomargin, heroBtnContact, sectionCenter, textLoop, textLoopWidth, underline, btn, btnLink} from './hero.module.scss';
import {button, smallPadding, buttonLink} from './button.module.scss'
import HeroFrontSwerve from "../assets/hero-front-swerve.inline.svg"
// import useSetStyle from './hooks/useSetStyle'
// import useSpring from './hooks/useSpring'
// import { useProgressContext } from './ProgressProvider'

//const cax = classnames.bind(css)

const Hero = ({ query }) => { 
  // const progress = useProgressContext()
  // const progressRef = useRef()
  // const setProgressStyle = useSetStyle(progressRef)
  // const [setSpring] = useSpring({
  //   config: {
  //     interpolation: 'basic',
  //     friction: 5,
  //   },
  //   progress: 0,
  //   onUpdate: ({ progress }) => {
  //     setProgressStyle({
  //       x: `${progress * 100}%`,
  //     })
  //   },
  // })
  //   useEffect(() => {
  //     setSpring({ progress })
  //   }, [progress])
    
  return (
    <header className={hero}>
      <div className={cx(sectionCenter, heroCenter)}>
          {/* <StaticImage
          src="../assets/hero-img.png"
          alt="portfolio"
          className={heroImg}
          placeholder="blurred"
        /> */}
        {/* <StaticImage
          src="../assets/promotion.inline.svg"
          alt="portfolio"
          className={cx(heroImg, heroImgNew, heroHidden)}
          placeholder="blurred"
        />
        <StaticImage
          src="../assets/hero-front-swerve.inline.svg"
          alt="portfolio"
          className={cx(heroImg, heroImgNew)}
          placeholder="blurred"
        /> */}
        <div  className={cx(heroSvg, heroSvgNew)}>
          <HeroFrontSwerve />
          </div>
        <article className={heroInfo}>
          <div>
            <div className={`underline ${underline}`}></div>
            <h3 className={cx(heroHeadline, heroNomargin)}>I'm Brandon</h3>
            <h4 className={cx(heroSubHeadline, heroNomargin)}>
              {" "}
              <TextLoop className={`text-loop ${textLoop}`}>
                <span className={textLoopWidth}>Puppeteer does more than test</span>
                <span className={textLoopWidth}>10+ yrs in Web Dev.</span>
                <span className={textLoopWidth}>Gatsby, Strapi, & CSS Modules</span>
                <span className={textLoopWidth}>Website still in development</span>
                <span className={textLoopWidth}>Button animation from strapi.com</span>
                <span className={textLoopWidth}>GSAP + Framer Motion</span>
                <span className={textLoopWidth}>Don't forget TailwindCSS</span>
                <span className={textLoopWidth}>HeadlessUI + ReactUI</span>
              </TextLoop>{" "}
              
            </h4>
            {/* <Link to="/contact" className={`btn ${heroBtnContact} ${btn}`} aria-label="Contact Me">
              Contact me
            </Link> */}
            <Button
            tagName="a"
            className={cx(button, heroBtnContact)}
            buttonClassName={cx(buttonLink, btnLink)}
            theme="greenGray"
            size={smallPadding}
            href="/contact/">
            Contact Me
            </Button>
            <SocialLinks aria-label="Social Links" />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero