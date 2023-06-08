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
        <article>
          <header>
            <time>{formattedDate}</time>
            <h1>
              {title}
            </h1>
            {tags.length > 0 && (
              <section>
                <h2>Tags</h2>
                <ul>
                  {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </section>
            )}
            <TableOfContents tableOfContents={tableOfContents} />
          </header>
          <MDXRenderer>{body}</MDXRenderer>
          <footer>
            <p>Last updated <time>{formattedDate}</time></p>
            <Share title={title} description={description} />
            <h2>Mentions</h2>
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