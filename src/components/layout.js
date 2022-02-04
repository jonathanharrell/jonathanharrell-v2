import React from "react"
import {Helmet} from "react-helmet";
import {MDXProvider} from "@mdx-js/react";
import {Link} from "gatsby";
import {Link as LinkIcon} from "react-feather";
import '../styles/prism.css';

const components = {
  h2: ({ id, children }) => {
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href);
    }

    return (
      <h2 id={id} className="relative group scroll-mt-8">
        <div className="not-prose hidden sm:block flex items-center absolute top-0 lg:top-1 -left-8 pr-2 h-full opacity-0 group-hover:opacity-100 transition-all">
          <a
            href={`#${id}`}
            title="Copy link to this section"
            aria-hidden="true"
            onClick={copyLink}
          >
            <LinkIcon/>
          </a>
        </div>
        {children}
      </h2>
    );
  }
}

export default function Layout({children}) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6728436/7253432/css/fonts.css"
        />
      </Helmet>
      <header className="container flex items-center justify-between mx-auto py-4 px-8">
        <Link to="/" className="font-idealSans">JH</Link>
        <nav className="font-idealSans">
          <ul className="flex">
            <li className="ml-8">
              <Link to="/blog">Articles</Link>
            </li>
            <li className="ml-8">
              <Link to="/about">About</Link>
            </li>
            <li className="ml-8">
              <Link to="/uses">Uses</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto py-16 px-8">
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </main>
      <footer className="container mx-auto py-4 px-8">
        footer
      </footer>
    </>
  )
}