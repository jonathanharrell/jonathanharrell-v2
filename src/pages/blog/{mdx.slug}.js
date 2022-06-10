import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";
import {formatDate} from "../../helpers";

export default function BlogPost({
  data: {mdx}
}) {
  const {frontmatter, body} = mdx;
  const {date, title, description} = frontmatter;
  const formattedDate = formatDate(date);

  return (
    <Layout>
      <article>
        <header className="flex flex-col gap-4 max-w-[58ch] mx-auto mb-12 lg:text-lg">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.125] font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl leading-tight sm:leading-tighter font-medium">
            {description}
          </p>
          <div>
            <button>share</button>
          </div>
        </header>
        <div className="article-body">
          <MDXRenderer>
              {body}
          </MDXRenderer>
        </div>
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
                date
                title
                description
            }
        }
    }
`;