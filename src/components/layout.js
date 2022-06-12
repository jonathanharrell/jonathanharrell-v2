import React from "react"
import {Helmet} from "react-helmet";
import {MDXProvider} from "@mdx-js/react";
import LinkIcon from '../images/link.svg';
import '../styles/prism.css';
import Header from "./header";
import Footer from "./footer";

const components = {
  h2: ({ id, children }) => {
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href);
    }

    return (
      <h2 id={id} className="relative group scroll-mt-8">
        <div className="not-prose hidden sm:block flex items-center absolute top-0 lg:top-0.5 -left-10 pr-2 h-full opacity-0 group-hover:opacity-100 transition-all">
          <a
            href={`#${id}`}
            title="Copy link to this section"
            aria-hidden="true"
            className="block p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            onClick={copyLink}
          >
            <LinkIcon width="0.75em" height="0.75em"/>
          </a>
        </div>
        {children}
      </h2>
    );
  }
}

export default function Layout({children, ...props}) {
  return (
    <div {...props}>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6728436/7253432/css/fonts.css"
        />
      </Helmet>
      <Header />
      <main className="container mx-auto py-16 px-8">
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </main>
      <Footer />
    </div>
  )
}