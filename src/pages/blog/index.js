import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="max-w-xl">
          <h1 className="font-idealSans text-sm sm:text-base text-red-500">
            Articles
          </h1>
          {posts.map(post => (
            <Link
              key={post.node.id}
              to={`/blog/${post.node.slug}`}
              className="block my-12"
            >
              <h2 className="text-lg xl:text-2xl font-idealSans font-medium tracking-tight hover:underline">
                {post.node.frontmatter.title}
              </h2>
              <p className="mt-2 leading-relaxed">
                {post.node.frontmatter.description}
              </p>
              <p className="mt-3 font-idealSans text-sm hover:underline text-gray-500">
                Read article
              </p>
            </Link>
          ))}
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