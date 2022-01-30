import React from "react"
import {Helmet} from "react-helmet";
import {MDXProvider} from "@mdx-js/react";
import {Link} from "gatsby";

const components = {
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