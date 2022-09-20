import React from "react";
import Title from "./title";
import servicesData from "../constants/services";
import cx from 'classnames'

import {
service,
underline,
servicesCenter
} from './services.module.scss';

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Skills" />
      <div className={`section-center ${servicesCenter}`}>
        {servicesData.map((serviceData) => {
          const { id, icon, title, text } = serviceData;
          let delay = (id+1) * 100
          return (
            <article key={id} className={service}>
              {icon}
              <h4 className={`mt-0`}>{title}</h4>
              <div className={`underline ${underline}`}></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
