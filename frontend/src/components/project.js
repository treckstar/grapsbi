import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt'
const Project = ({ id, description, title, github, desc, url, image }) => {
  return (
    <article className="project">
      {image && (
        <div class="project-img" style={{position: 'relative', overflow: 'hidden'}}>
        <img 
        src={image?.localFile.publicURL}
        alt={image?.alternativeText}
        key={id}
        style={{position: 'absolute', overflow: 'hidden', top: 0, left: 0, width: 100+'%', height:100+'%', objectFit: 'cover', objectPositoin: 'center center'}}
      />
      </div>
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {desc.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </div>
        <div className="project-links">
          <a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Github Link"
          >
            <FaGithub className="project-icon" />
          </a>
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Project Link"
          >
            <FaExternalLinkAlt className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

// For Projects Number => <span className="project-number">0{index + 1}.</span>

Project.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  desc: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
