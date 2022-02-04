const React = require('react');

module.exports = {
  siteMetadata: {
    title: `Jonathan Harrell`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-106163304-1"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        rehypePlugins: [
          require("@mapbox/rehype-prism"),
          require("rehype-slug"),
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./src/images/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./src/pages/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./content/posts"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./static/assets/"
      }
    },
  ]
};