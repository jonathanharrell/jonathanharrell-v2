import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({
   data: { mdx }
 }) {
  return (
    <div>
        <MDXRenderer>
          {mdx.body}
        </MDXRenderer>
    </div>
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