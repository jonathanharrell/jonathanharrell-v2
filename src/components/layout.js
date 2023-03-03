import React from "react"
import {Helmet} from "react-helmet";
import {MDXProvider} from "@mdx-js/react";
import LinkIcon from '../images/link.svg';
import '../styles/prism.css';
import Header from "./header";
import Footer from "./footer";
import { ThemeContext } from "../theme";

const components = {
  h2: ({ id, children }) => {
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href);
    }

    return (
      <h2 id={id} className="relative group scroll-mt-16">
        <div className="not-prose hidden sm:block flex items-center absolute top-0 lg:top-0.5 -left-6 pr-2 h-full opacity-0 group-hover:opacity-100 transition-all">
          <a
            href={`#${id}`}
            title="Copy link to this section"
            aria-hidden="true"
            className="block py-1.5"
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
  const [theme, setTheme] = React.useState();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div {...props}>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/6728436/7253432/css/fonts.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Header />
        <main>
          <div className="container mx-auto pt-24 lg:pt-32 pb-16 px-8">
            <MDXProvider components={components}>
              {children}
            </MDXProvider>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}