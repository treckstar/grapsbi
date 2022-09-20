import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Contact Page" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
