import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";
import {MDXRenderer} from "gatsby-plugin-mdx";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div>
        <h1>
          Articles
        </h1>
        <div>
          {posts.map(post => {
            return (
              <article>
                <Link
                  key={post.node.id}
                  to={`/blog/${post.node.slug}`}
                >
                  <h2>{post.node.frontmatter.title}</h2>
                </Link>
                {/*<MDXRenderer>{post.node.body}</MDXRenderer>*/}
                <p>
                  <Link
                    key={post.node.id}
                    to={`/blog/${post.node.slug}`}
                  >
                    Read more
                  </Link>
                </p>
              </article>
            )
          })}
        </div>
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