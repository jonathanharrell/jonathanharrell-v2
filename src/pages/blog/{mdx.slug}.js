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
        <header className="text-center">
          <p className="mb-6 sm:mb-8 font-idealSans text-sm sm:text-base text-orange-500">
            {formattedDate}
          </p>
          <h1 className="max-w-[22ch] mx-auto font-idealSans text-3xl sm:text-4xl lg:text-5xl xl:leading-[1.125] font-medium tracking-tight">
            {title}
          </h1>
          <p className="max-w-[60ch] mx-auto mt-6 sm:mt-8 font-idealSans italic text-sm sm:text-base !leading-loose">
            {description}
          </p>
        </header>
        <hr className="max-w-[160px] mx-auto my-10 sm:my-12 lg:my-16"/>
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