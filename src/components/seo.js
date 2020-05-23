import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import { usePageContext } from '../context/pageContext'

const SEO = ({
    title,
    titleTemplate,
    description,
    keywords,
    canonical,
    ogImage,
    ogTitle,
    ogDescription,
    ogUrl,
    article,
    meta,
    link,
    lang
  }) => {

  const { site } = useStaticQuery(query)
  console.log(site.siteMetadata.image)
  const { pathname } = useLocation()
  const { langKey } = usePageContext()

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : site.siteMetadata.website
  const fullUrl = `${baseUrl}${pathname}`

  // all props except 'link' and 'meta' are overridden when props are defined in component
  // 'link' and 'meta' defaults appear on every page. If defined in props, they are appended to defaults
  const defaults = {
    title: "A children's story",
    titleTemplate: t.tt[langKey],
    description: `A children's book`,
    keywords: ['childrens book', 'picture book','kids','vegetables','humorous','toots','deer','animals','colors','reading'],
    lang: langKey,
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width'
      },
    ],
    link: [
      {
        rel: "canonical",
        href: canonical || fullUrl,
      },
    ]
    // language alternate tags
    .concat(site.siteMetadata.supportedLangs.map(lng=> {
      if (lng === 'en') {
        console.log(`${baseUrl}/${pathname.split('/').splice(2).join('/')}`)
        return (
          {
            rel: 'alternate',
            hreflang: lng,
            href: `${baseUrl}/${pathname.split('/').splice(2).join('/')}`
          }
        )
      } else {
        return (
          {
            rel: 'alternate',
            hreflang: lng,
            href: `${baseUrl}/${lng}/${pathname.split('/').splice(2).join('/')}`
          }
        )
      }
    })),
    // OG defaults
    og: {
      title: 'The Power of Vegetables',
      description: `A children's book`,
      url: fullUrl,
      type: 'website',
      image: site.siteMetadata.image,
      alt: 'The Power of Vegetables'
    },
  }

  // logic for props ultimately rendered in <head>
  const seo = {
    title: title || defaults.title,
    titleTemplate: titleTemplate || defaults.titleTemplate,
    description: description || defaults.description,
    keywords: keywords || defaults.keywords,
    meta: meta ? defaults.meta.concat(meta) : defaults.meta,
    link: link ? defaults.link.concat(link) : defaults.link,
    lang: lang || defaults.lang,
    og: {
      title: ogTitle ? defaults.titleTemplate.replace(/%s/, ogTitle) : defaults.titleTemplate.replace(/%s/, title),
      description: ogDescription || description || defaults.og.description,
      url: ogUrl || defaults.og.url,
      type: article ? 'article' : defaults.og.type,
      image: `${article ? 'https://' : baseUrl}${ogImage || defaults.og.image}`, // articles have https:// prefix only
      alt: ogTitle || title || defaults.og.title,
    },
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      description={seo.description}
      link={ [ ...seo.link ] }
      meta={[
        ...seo.meta
      ]
      // site description
      .concat([
        {
          name: 'description',
          content: seo.description,
        },
        {
          name: 'keywords',
          content: seo.keywords.join(','),
        },
      ])
      // FB OG data
      .concat([
        {
          property: 'og:title',
          content: seo.og.title,
        },
        {
          property: 'og:description',
          content: seo.og.description,
        },
        {
          property: 'og:url',
          content: seo.og.url,
        },
        {
          property: 'og:type',
          content: seo.og.type,
        },
        {
          property: 'og:image',
          content: seo.og.image,
        },
        {
          property: 'og:image:alt',
          content: seo.og.alt,
        },
        {
          property: 'og:image:width',
          content: 800,
        },
        {
          property: 'og:image:height',
          content: 600,
        },
        {
          property: 'og:locale',
          content: seo.lang,
        },
      ])
      // Twitter og data mirrors fb og data
      .concat([
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:title',
          content: seo.og.title,
        },
        {
          property: 'twitter:description',
          content: seo.og.description,
        },
        {
          property: 'twitter:image',
          content: seo.og.image,
        },
      ])
    }
    >
      <html lang={seo.lang} xmlns="http://www.w3.org/1999/xhtml"
      prefix="og: http://ogp.me/ns# fb: http://www.facebook.com/2008/fbml"/>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  article: PropTypes.bool,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        image
        supportedLangs
        website
      }
    }
  }
`

const t = {
  tt: {
    en: "%s | The Power of Vegetables",
    fr: "%s | The Power of Vegetables",
    ja: "%s ★ やさいのちから",
  }
}
