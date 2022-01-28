import React from "react"
import {Helmet} from "react-helmet";

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
      <div className="container mx-auto">
        {children}
      </div>
    </>
  )
}