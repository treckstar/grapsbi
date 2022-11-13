import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Cmp404A from "../components/error/cmp-404-a"

const Error = () => {
  return (
    <Layout>
      <Seo seo={{ metaTitle: "404", metaDescription: "Error - Page not found." }} />
      <Cmp404A />
    </Layout>
  )
}

export default Error
