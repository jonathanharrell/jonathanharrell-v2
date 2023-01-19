import React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../../components/layout";

const Blog = ({data: {allMdx}}) => {
  const posts = allMdx.edges;

  return (
    <Layout>
      <div className="xl:max-w-4xl mx-auto">
        <div>
          <h1 className="mb-8 text-sm sm:text-3xl font-semibold">
            Articles
          </h1>
          <div className="grid grid-cols-12 gap-x-24">
            <div className="col-start-1 col-end-9">
              {posts.map(post => {
                return (
                  <Link
                    key={post.node.id}
                    to={`/blog/${post.node.slug}`}
                    className="flex flex-col gap-4 py-8 border-b border-gray-200 dark:border-gray-700"
                  >
                    <h2 className="text-xl lg:text-2xl leading-tight font-bold">
                      {post.node.frontmatter.title}
                    </h2>
                    <p className="text-xl leading-normal">
                      {post.node.frontmatter.description}
                    </p>
                    <p>
                      <a href="" className="font-idealSans font-bold dark:text-gray-500">
                        Read more
                      </a>
                    </p>
                  </Link>
                )
              })}
            </div>
            <div className="col-start-10 col-end-13">
              <h2>Categories</h2>
              <ul>
                <li>section 1</li>
                <li>section 2</li>
                <li>section 3</li>
                <li>section 4</li>
                <li>section 5</li>
              </ul>
              <h2>Tags</h2>
              <ul>
                <li>section 1</li>
                <li>section 2</li>
                <li>section 3</li>
                <li>section 4</li>
                <li>section 5</li>
              </ul>
            </div>
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