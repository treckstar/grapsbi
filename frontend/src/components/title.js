import React from "react";
import cx from "classnames"
import {
  sectionTitleCenter,
  titleCompUnderline
} from "./title.module.scss"

const Title = ({ cssName, cssUnderline, title }) => {
  return (
      <div className={cx(sectionTitleCenter, cssName)}>
          <h3>{title || 'default title'}</h3>
          <div className={`underline ${titleCompUnderline} ${cssUnderline}`}></div>
      </div>
  )
}; 

export default Title;
