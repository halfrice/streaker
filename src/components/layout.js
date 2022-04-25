import React from "react"
import "reset-css/reset.css"
import { GlobalStyles } from "@styles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Layout
