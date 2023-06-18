import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";
import {formatDate} from "../../helpers";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div className="grid-wrapper">
        <h1 className="sr-only">
          Articles
        </h1>
        {posts.length > 0 && (
          <div className="posts">
            {posts.map(post => {
              const {id, slug, frontmatter} = post.node;
              const {date, title, description} = frontmatter;
              const formattedDate = formatDate(date);

              return (
                <article className="post-teaser">
                  <time>{formattedDate}</time>
                  <h2>
                    <Link key={id} to={`/blog/${slug}`}>
                      {title}
                    </Link>
                  </h2>
                  <p>
                    {description}
                  </p>
                  <p className="read-more">
                    <Link key={id} to={`/blog/${slug}`}>
                      Read more
                    </Link>
                  </p>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Blog;

export const pageQuery = graphql`
    query {
        allMdx(
            filter: {frontmatter: {templateKey: {eq: "post"}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            edges {
                node {
                    id
                    slug
                    body
                    frontmatter {
                        title
                        date
                        description
                    }
                }
            }
        }
    }
`;