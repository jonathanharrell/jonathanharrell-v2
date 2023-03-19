import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div>
        <h1 className="sr-only">
          Articles
        </h1>
        <div>
          {posts.map(post => {
            return (
              <Link
                key={post.node.id}
                to={`/blog/${post.node.slug}`}
                className="flex items-center gap-16 mb-24 group"
              >
                <div className="group-even:order-1 w-1/2 aspect-video bg-neutral-500" />
                <div className="w-1/2">
                  <h2 className="max-w-[24ch] text-3xl font-bold">
                    {post.node.frontmatter.title}
                  </h2>
                  <p className="max-w-[48ch] leading-relaxed mt-2">
                    {post.node.frontmatter.description}
                  </p>
                  <p className="mt-3">
                    <span className="text-sm font-semibold text-neutral-500">
                      Read more
                    </span>
                  </p>
                </div>
              </Link>
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