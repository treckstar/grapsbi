import React from "react"
// eslint-disable-next-line no-unused-vars
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TextLoop from "react-text-loop"
import SocialLinks from "../constants/socialLinks"

const Hero = ({ query }) => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <StaticImage
          src="../assets/hero-img.png"
          alt="Aggressive Cache"
          className="hero-img"
        />
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h3>I'm Brandon</h3>
            <h4>
              A{" "}
              <TextLoop className="text-loop">
                <span>Baker</span>
                <span>Artisan</span>
                <span>Open Source</span>
              </TextLoop>{" "}
              Web Developer
            </h4>
            <Link to="/contact" className="btn" aria-label="Contact Me">
              Contact me
            </Link>
            <SocialLinks aria-label="Social Links" />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
