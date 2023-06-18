import React from "react"
import {Helmet} from "react-helmet";
import {MDXProvider} from "@mdx-js/react";
import LinkIcon from '../images/link.svg';
import '../styles/prism.css';
import Header from "./header";
import Footer from "./footer";
import { ThemeContext } from "../theme";
import '../styles/global.css';

const components = {
  h2: ({ id, children }) => {
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href);
    }

    return (
      <h2 id={id}>
        {children}
        <a
          href={`#${id}`}
          title="Copy link to this section"
          aria-hidden="true"
          onClick={copyLink}
        >
          <LinkIcon width="0.75em" height="0.75em"/>
        </a>
      </h2>
    );
  }
}

const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

export default function Layout({children, ...props}) {
  const [theme, setTheme] = React.useState();

  React.useEffect(() => {
    const savedTheme = localStorage.theme;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(darkThemeMediaQuery.matches ? 'dark' : 'light');
    }
  }, [setTheme]);

  React.useEffect(() => {
    const handleThemeChange = event => {
      setTheme(event.matches ? 'dark' : 'light');
    }

    darkThemeMediaQuery.addListener(handleThemeChange);

    return () => {
      darkThemeMediaQuery.removeListener(handleThemeChange);
    }
  }, [setTheme]);

  React.useEffect(() => {
    if (theme === 'light') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }

    if (theme === 'dark') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div {...props}>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/6728436/7253432/css/fonts.css"
          />
        </Helmet>
        <Header />
        <main>
          <div className="container">
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