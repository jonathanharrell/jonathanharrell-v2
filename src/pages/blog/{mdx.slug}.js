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
  const {date, title, description, tags} = frontmatter;
  const formattedDate = formatDate(date);

  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <header className="flex flex-col gap-4 mb-10">
          <p className="text-sm font-semibold text-neutral-500">{formattedDate}</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              {title}
            </h1>
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <li key={tag} className=" py-1.5 px-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs leading-none font-semibold text-neutral-500 dark:text-neutral-400">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        <div className="max-w-none prose dark:prose-invert prose-pre:bg-white prose-pre:dark:bg-neutral-900 prose-pre:border prose-pre:border-neutral-200 prose-pre:dark:border-neutral-800 prose-pre:shadow prose-pre:dark:shadow-lg prose-code:before:content-[''] prose-code:after:content-['']">
          <MDXRenderer>{body}</MDXRenderer>
          <footer>
            <div>
              <h2 className="mb-2 font-mercurySmallCaps">Last updated</h2>
              <p>{formattedDate}</p>
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
              <ul>
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
                tags
            }
            tableOfContents
        }
    }
`;