import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";
import Share from '../../components/share';
import TableOfContents from "../../components/table-of-contents";
import {formatDate} from "../../helpers";

export default function BlogPost({
  data: {mdx}
}) {
  const {frontmatter, tableOfContents, body} = mdx;
  const {date, title, description, tags} = frontmatter;
  const formattedDate = formatDate(date);

  return (
    <Layout>
      <div>
        <article className="full-post grid-wrapper">
          <header>
            <time>{formattedDate}</time>
            <h1>
              {title}
            </h1>
            <p className="lead">
              {description}
            </p>
            <TableOfContents tableOfContents={tableOfContents} />
          </header>
          <div className="post-body grid-wrapper">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <footer>
            <p className="post-updated">
              Last updated <time>{formattedDate}</time>
            </p>
            <Share title={title} description={description} />
            {tags.length > 0 && (
              <section>
                <h2 className="sr-only">Tags</h2>
                <ul className="tags-list">
                  {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </section>
            )}
            {/*<section>*/}
            {/*  <h2>Mentions</h2>*/}
            {/*</section>*/}
          </footer>
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
                tags
            }
            tableOfContents
        }
    }
`;