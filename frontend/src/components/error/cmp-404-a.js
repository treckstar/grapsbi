 import React from "react"
import cx from 'classnames'
import SvgError from "../../assets/svg-error-placeholder.inline.svg"

import {
  isDark, errorContainer, errorNav, darkMode, darkModeToggle, errorWrapper, errorInner, hasTextCentered, bgNumber, darkInverted, buttonWrap, minimalWrapper, button
} from './cmp-404-a.module.scss'

const Cmp404A = () => {
  return (
 
    <div className={cx(isDark, minimalWrapper)}>
 <div className={errorContainer}>
    <div className={errorWrapper}>
      <div className={cx(errorInner, hasTextCentered)}>
        <div className={cx(bgNumber, darkInverted)}>404</div>
        <SvgError />

        <h3 className={darkInverted}>We couldn't find that page</h3>
        <p>
          Looks like we couldn't find that page. Please try again or contact an
          administrator if the problem persists.
        </p>
        <div className={buttonWrap}>
          <div className={button}>
          <button
              class="relative top-0 left-0 flex w-auto mx-2 justify-center bg-transparent"
              style={{ transform: 'translateZ(900px)' }}>
              <div class="wrappy relative top-0 left-0 inline-block w-auto bg-transparent">
                  <span class="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-transparent shadow opacity-0"></span>
                  <div class="testt3 z-10 absolute top-0 left-0 flex h-full w-full items-center rounded-md bg-green-700 shadow transition-transform">
                      <div class="relative z-20 top-0 left-0 h-full w-full bg-transparent"></div>
                  </div>
                  <a
                      href="#"
                      class="relative z-30 top-0 left-0 inline-block h-full w-full py-[0.6375rem] px-[1.243rem] text-sm font-semibold bg-transparent text-white transition-transform"
                      style={{
                          transform: 'translateZ(1000px)',
                      }}>Design</a>
              </div>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}

export default Cmp404A
