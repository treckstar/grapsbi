import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Error = () => {
  return (
    <Layout>
      <Seo
        title="404 Page"
        description="Page is Not Available. Go to HOME Page"
      />
      <main className="error-page">
        <h3>oops! it's a dead end</h3>
        <Link to="/" className="btn">
          back to home
        </Link>
      </main>
    </Layout>
  )
}

export default Error
