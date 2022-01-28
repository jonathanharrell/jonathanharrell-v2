import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";

export default function BlogPost({
 data: {mdx}
}) {
  return (
    <Layout>
      <div className="container mx-auto py-24 px-12">
        <article className="article-body">
          <h1>{mdx.frontmatter.title}</h1>
          <MDXRenderer>
            {mdx.body}
          </MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
    query ($id: String!) {
        mdx(id: { eq: $id }) {
            slug
            body
            frontmatter {
                title
            }
        }
    }
`;