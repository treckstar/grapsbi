import React, { useRef, forwardRef, useState } from 'react'
// import { useIsomorphicLayoutEffect } from 'usehooks-ts'
//import { useIsomorphicLayoutEffect } from './hooks/useIsomorphicLayoutEffect'
import { Link } from "gatsby"
import classNames from 'classnames/bind'
import cx from 'classnames'
// import useSpring from './hooks/useSpring'
//import {useSpring} from 'react-spring';
// import useSetStyle from './hooks/useSetStyle'
import { gsap } from 'gsap'
import { motion } from "framer-motion";

// import useOnMouseEnter from './hooks/useOnMouseEnter'

import {
    button,
    fullWidth,
    disabled,
    hoverCircle,
    shadow,
    background,
    theme,
    buttonLink,
    buttonContainer,
    marketplaceWhite,
    white,
    greenGray,
    greenGrayWhite,
    lavender,
} from './button.module.scss'
//import css from './button.module.scss'

const Button = forwardRef(
  (
    {
      className,
      theme,
      link,
      size,
      tagName,
      disabled,
      fullWidth,
      buttonClassName,
      buttonWrapperClassName,
      withFocus,
      ...rest
    },
    ref
  ) => {
      // const [mouseIsHover, onMouseEnter, onMouseLeave] = useOnMouseEnter(false)

      // const shadowRef = useRef()
      // const buttonRef = useRef()
      // const hoverCircleRef = useRef()

      // const setShadowStyle = useSetStyle(shadowRef)
      // const setButtonStyle = useSetStyle(buttonRef)
      // const setHoverCircleStyle = useSetStyle(hoverCircleRef)

      // const [setTargetValue] = useSpring({
      //   opacity: 0,
      //   z: 0,
      //   config: {
      //     friction: 25,
      //     rigidity: 0.13,
      //   },
      //   onUpdate: ({ opacity, z }) => {
      //     setShadowStyle({ opacity })
      //     setButtonStyle({ z, transformPerspective: 800 })
      //     //console.log('opacity', opacity);
      //     //console.log('z', z);
      //   },
      // })

      // const [setCircleValue] = useSpring({
      //   progress: 0,
      //   config: {
      //     interpolation: 'basic',
      //     friction: 10,
      //   },
      //   onUpdate: ({ progress }) => {
      //     setHoverCircleStyle({
      //       transformPerspective: 15,
      //       z: -90 + 100 * progress,
      //       opacity: gsap.utils.wrapYoyo(0, 0.5, progress),
      //     })
      //     console.log('progress', progress);
      //   },
      // })

      // useIsomorphicLayoutEffect(() => {
      //   setTargetValue({
      //     opacity: mouseIsHover ? 1 : 0,
      //     z: mouseIsHover ? 43 : 0,
      //   })
      //   setCircleValue({
      //     progress: mouseIsHover ? 1 : 0,
      //     config: {
      //       friction: mouseIsHover ? 7.5 : 1,
      //     },
      //   })
      //   console.log('mouseIsHover', mouseIsHover);
      // }, [mouseIsHover])
      const [isHovered, setHovered] = useState(false)

      const Component = tagName || Link

      console.log('ref', ref)
      console.log(ref)

      const cxxx = classNames(theme, {white})
      console.log('theme', theme)
      console.log(theme)
      console.log('white', white)
      console.log(white)
      console.log('cxxx', cxxx)
      console.log(cxxx)

      function onComplete(d) {
          console.log('Completed animating', d)
          console.log('Animation completed')
      }

      function onUpdate(latest) {
          console.log(latest.z, latest.opacity)
      }

      return (
          <div
              ref={ref}
              className={cx(className, size, buttonContainer, {
                  disabled,
                  withFocus,
                  fullWidth,
              })}>
              <div
                  ref={ref}
                  className={cx(button, buttonWrapperClassName, {
                      [white]: theme === 'white',
                      [greenGray]: theme === 'greenGray',
                      [greenGrayWhite]: theme === 'greenGrayWhite',
                      [lavender]: theme === 'lavender',
                  })}>
                  <motion.span
                      className={shadow}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ type: 'spring', bounce: 0.1, damping: 25 }}
                  />
                  <motion.div
                      className={cx(background, {
                        [white]: theme === 'white',
                        [greenGray]: theme === 'greenGray',
                        [greenGrayWhite]: theme === 'greenGrayWhite',
                        [lavender]: theme === 'lavender',
                      })}
                      animate={{
                          transformPerspective: 800,
                          z: isHovered ? 40 : 0,
                      }}
                      transition={{
                          type: 'spring',
                          damping: 10,
                          stiffness: 400,
                      }}>
                      <motion.div
                          className={hoverCircle}
                          initial={{ opacity: 0 }}
                          animate={{
                              opacity: isHovered ? [0.5, 0] : 0,
                              transformPerspective: 15,
                              z: -90 + 100 * (isHovered ? 1 : 0),
                          }}
                          transition={{
                              type: 'spring',
                              bounce: 0.1,
                              duration: 0.45,
                              restSpeed: 1,
                              restDelta: 1,
                          }}
                      />
                      {/* onAnimationComplete={definition => { onComplete(definition) }}  onUpdate={onUpdate} */}
                  </motion.div>
                  <Component
                      className={cx(buttonLink, buttonClassName)}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onFocus={() => setHovered(true)}
                      onBlur={() => setHovered(false)}
                      {...link}
                      target={link?.target ?? '_self'}
                      {...rest}
                  />
              </div>
          </div>
      )
  }
)

export default Button
