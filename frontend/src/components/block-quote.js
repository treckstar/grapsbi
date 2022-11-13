import React from "react"
import Title from "./title"
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft"

const BlockQuote = ({ data }) => {
  return (
    <section className="section-quote section bg-grey">
      <Title title={data.title} cssName="section-quote-title" />
      <div
        className="quote-center fa-quote-left"
        id="single-quote">
        <p>
          <FaQuoteLeft style={{ marginRight: "0.3em", color: "#49aeba" }} />
          {data.quoteBody}
        </p>

        <p className="about-steve mt-4 block font-bold uppercase not-italic">
          Steve Jobs
        </p>
      </div>
    </section>
  )
}

export default BlockQuote
