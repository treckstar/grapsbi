import React from "react";
import Title from "./title";
import { FaAngleDoubleRight } from "@react-icons/all-files/fa/FaAngleDoubleRight";
import { graphql, useStaticQuery } from "gatsby";
import Recommendations from "./recommendations";
import Section from './section'
import cx from 'classnames'
import { sectionJobs } from './jobs.module.scss'
const query = graphql`
  {
    allStrapiJob(sort: {order: DESC, fields: strapi_id}) {
    nodes {
      strapi_id
      id
      company
      position
      date
      desc {
        strapi_id
        name
        id
      }
    }
  }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJob: { nodes: jobs },
  } = data;
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value];

  return (
    <Section cssName={sectionJobs}>
      <Title title="Experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                aria-label="Company Name"
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{company}</h3>
          <h4>{position}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Recommendations />
    </Section>
  );
};

export default Jobs;
