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
    {
      resolve: "gatsby-plugin-svgr-svgo",
      options: {
        inlineSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                },
                { name: "removeDimensions" },
                {
                  name: 'replaceColors',
                  type: 'perItem',
                  fn: (item) => {
                    if (!item.attributes) return;

                    const attributes = Object.entries(item.attributes);
                    const valuesToReplace = {
                      '#F3F4F6': 'background',
                      '#101727': 'text',
                      '#D1D5DC': 'image',
                      '#E5E7EB': 'placeholder',
                      'multiply': 'overlay-blend-mode'
                    }

                    attributes.forEach(([key, value]) => {
                      const matchingKey = Object.keys(valuesToReplace).find(key => value.includes(key));

                      if (matchingKey) {
                        item.attributes[key] = item.attributes[key].replace(
                          matchingKey,
                          `var(--diagram-${valuesToReplace[matchingKey]})`
                        );
                      }
                    });
                  },
                },
              ]
            }
          }
        ]
      }
    },
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
          require("rehype-slug")
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