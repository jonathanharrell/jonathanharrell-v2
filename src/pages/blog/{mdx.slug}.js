import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";

export default function BlogPost({
 data: {mdx}
}) {
  return (
    <Layout>
      <article className="grid md:grid-cols-12 prose lg:prose-xl max-w-none prose-headings:font-idealSans prose-headings:tracking-tight prose-p:font-mercury prose-p:tracking-[-.0125em] prose-code:font-mono">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>
          {mdx.body}
        </MDXRenderer>
      </article>
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