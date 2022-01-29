import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";

export default function BlogPost({
 data: {mdx}
}) {
  return (
    <Layout>
      <div className="container mx-auto py-24 px-8">
        <article>
          <p className="mb-4 font-idealSans text-sm text-center text-red-500">
            {mdx.frontmatter.date}
          </p>
          <h1 className="px-['12.5%'] font-idealSans text-3xl font-semibold tracking-tight text-center">
            {mdx.frontmatter.title}
          </h1>
          <p className="mt-4 mb-8 font-idealSans text-sm leading-6 italic text-center">{mdx.frontmatter.description}</p>
          <hr className="my-8"/>
          <div className="article-body">
            <MDXRenderer>
              {mdx.body}
            </MDXRenderer>
          </div>
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
                date
                title
                description
            }
        }
    }
`;