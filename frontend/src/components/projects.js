import React from "react";
import Title from "./title";
import Button from './button'
import Project from "./project";


import cx from 'classnames'
import {
    button,
    flexCenter,
    smallPadding,
    buttonLink,
} from './button.module.scss'

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} cssName="section-center-title" />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
        {showLink && (
        <Button
          tagName="a"
          className={cx(button, flexCenter)}
          buttonClassName={buttonLink}
          theme="greenGray"
          size={smallPadding}
          href="/projects">
          View All Projects
          </Button>
      )}
      </div>
    </section>
  );
};

export default Projects;
