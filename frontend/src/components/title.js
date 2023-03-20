import React from "react";
import cx from "classnames"
import {
  sectionTitle,
  titleUnderline
} from "./title.module.scss"

const Title = ({ cssName, cssUnderline, title }) => {
  return (
      <div className={cx(sectionTitle, cssName)}>
          <h3>{title || 'default title'}</h3>
          <div className={`underline ${titleUnderline} ${cssUnderline}`}></div>
      </div>
  )
}; 

export default Title;
