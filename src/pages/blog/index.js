import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";
import {formatDate} from "../../helpers";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div>
          <h1 className="mb-12 font-idealSans text-sm sm:text-base text-orange-500">
            Articles
          </h1>
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {posts.map(post => {
              const formattedDate = formatDate(post.node.frontmatter.date);

              return (
                <Link
                  key={post.node.id}
                  to={`/blog/${post.node.slug}`}
                  className="block col-span-6"
                >
                  <p className="mb-3 font-idealSans text-sm text-gray-500 hover:text-gray-600">
                    {formattedDate}
                  </p>
                  <h2 className="text-xl lg:text-2xl font-idealSans font-medium tracking-tight hover:underline">
                    {post.node.frontmatter.title}
                  </h2>
                  <p className="mt-2 leading-relaxed">
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