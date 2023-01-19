import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../../components/layout";
import Share from '../../components/share';
import {formatDate} from "../../helpers";

export default function BlogPost({
  data: {mdx}
}) {
  const {frontmatter, tableOfContents, body} = mdx;
  const {date, title, description} = frontmatter;
  const formattedDate = formatDate(date);

  return (
    <Layout>
      <article className="grid grid-cols-12 xl:gap-x-24">
        <div className="article-body grid grid-cols-12 xl:grid-cols-9 lg:gap-x-12 col-start-1 col-end-13 xl:col-end-10">
          <header className="relative lg:col-start-1 lg:col-end-5 xl:col-end-4 lg:text-right border-t-4 border-black dark:border-white pt-2">
            <h1 className="lg:!absolute w-full mb-4 lg:mb-0 text-3xl font-bold">
              {title}
            </h1>
          </header>
          <MDXRenderer>
              {body}
          </MDXRenderer>
          <footer>
            <div>
              <h2 className="mb-2 font-mercurySmallCaps">Last updated</h2>
              <p className="font-idealSans">{formattedDate}</p>
            </div>
            <div>
              <h2 className="mb-2 font-mercurySmallCaps">Share</h2>
              <Share title={title} description={description} />
            </div>
            <div>
              <h2 className="mb-2 font-mercurySmallCaps">Mentions</h2>
            </div>
          </footer>
        </div>
        <div className="hidden xl:block col-start-10 col-end-13 row-start-1">
        <aside className="sticky top-8 !text-left text-lg pt-3">
          <div className="absolute w-full flex flex-col gap-6">
            <div>
              <h2 className="mb-3 font-mercurySmallCaps">
                Table of contents
              </h2>
              <ul className="font-idealSans">
                {tableOfContents.items.map(item => (
                  <li key={item.title} className="mb-3 last:mb-0">
                    <a href={item.url} className="hover:bg-orange-100">
                      {item.title}
                    </a>
                    {item.items && (
                      <ul className="ml-6 mt-2">
                        {item.items.map(i => (
                          <li key={i.title} className="mb-2">
                            <a href={i.url} className="hover:bg-orange-100">
                              {i.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
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
            tableOfContents
        }
    }
`;