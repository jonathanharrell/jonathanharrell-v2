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
      <div className="lg:grid lg:grid-cols-12 lg:gap-4">
        <article className="lg:col-span-8">
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
          <div className="max-w-none prose dark:prose-invert prose-pre:bg-white prose-pre:dark:bg-neutral-900 prose-pre:border prose-pre:border-neutral-200 prose-pre:dark:border-neutral-800 prose-pre:shadow prose-pre:dark:shadow-lg prose-pre:text-neutral-500 prose-pre:dark:text-neutral-300 prose-code:before:content-[''] prose-code:after:content-[''] marker:text-neutral-500">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <footer className="mt-16">
            <p className="text-sm text-neutral-500">Last updated {formattedDate}</p>
            <div>
              <Share title={title} description={description} />
            </div>
            <div>
              <h2 className="mb-2">Mentions</h2>
            </div>
          </footer>
        </article>
        <aside className="hidden lg:block lg:col-start-10 lg:col-span-3">
          <div className="article-toc sticky top-24 overflow-y-auto">
            <div className="absolute w-full pr-2 pb-8">
              <TableOfContents tableOfContents={tableOfContents} />
            </div>
          </div>
        </aside>
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