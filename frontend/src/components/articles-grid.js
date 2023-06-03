import React from "react"
import Title from "./title"
import ArticleCard from "./article-card"

const ArticlesGrid = ({ articles, title = "Articles"}) => {
  return (
    <section className="section">
      <Title title={title} cssName="section-center-title" />
      <div className="section-center blogs-center">
        
        {
          articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))
        }
      </div>
    </section>
  )
}

export default ArticlesGrid
