import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Script } from "gatsby"

const Seo = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
        favicon {
          localFile {
            url
          }
        }
        defaultSeo {
          metaTitle
          metaDescription
          shareImage {
            localFile {
              url
            }
          }
        }
      }
    }
  `)

  const { siteName, defaultSeo, favicon } = strapiGlobal

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo }

  // Add site name to title
  fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      )
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      )
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.localFile.publicURL
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      )
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })

    return tags
  }

  const metaTags = getMetaTags()

  return (
    <>
    <Helmet
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: favicon.localFile.url,
        },
      ]}
      meta={metaTags}
    />
    
      <Script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-WZ2LN3QBQP" />
      <Script type="text/javascript">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-WZ2LN3QBQP');
      `}
      </Script>
    </>
  )
}

export default Seo
