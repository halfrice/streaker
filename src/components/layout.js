import React from "react"
import "reset-css/reset.css"
import { GlobalStyles } from "@styles"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <h1>Layout</h1>
      {children}
    </div>
  )
}

export default Layout
