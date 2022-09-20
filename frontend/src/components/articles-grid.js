import React from "react"
import Title from "./title"
import ArticleCard from "./article-card"

const ArticlesGrid = ({ articles }) => {
  return (
    <section className="section">
      <Title
        title="100% Natural text-based cache files"
      />
      <div className="section-center blogs-center">
        
        {
          articles.map((article) => (
            <ArticleCard article={article} />
          ))
        }
      </div>
    </section>
  )
}

export default ArticlesGrid
