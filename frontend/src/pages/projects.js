import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from "../components/projects"
import Seo from "../components/seo"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Seo seo={{ metaTitle: "Projects", metaDescription: "The coolest current hip trends." }} />
      <section className="projects-page">
        <Projects projects={projects} title="Projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
    {
        allStrapiProject {
            nodes {
                github
                id
                description
                title
                url
                image {
                    alternativeText
                    localFile {
                        url
                        publicURL
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.77)
                        }
                    }
                }
                desc {
                    id
                    name
                }
            }
        }
    }
`

export default ProjectsPage
