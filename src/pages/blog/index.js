import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";
import {formatDate} from "../../helpers";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div>
          <h1 className="mb-12 text-sm sm:text-2xl font-semibold">
            Articles
          </h1>
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            {posts.map(post => {
              const formattedDate = formatDate(post.node.frontmatter.date);

              return (
                <Link
                  key={post.node.id}
                  to={`/blog/${post.node.slug}`}
                  className="block col-span-6 p-8 rounded-lg bg-white dark:bg-gray-800"
                >
                  <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {formattedDate}
                  </p>
                  <h2 className="text-xl lg:text-3xl leading-tight font-bold tracking-tight">
                    {post.node.frontmatter.title}
                  </h2>
                  <p className="mt-4 tracking-normal text-gray-600 dark:text-gray-400">
                    {post.node.frontmatter.description}
                  </p>
                </Link>
              )
            })}
          </div>
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