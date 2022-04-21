import React from "react"
import styled from "styled-components"
import "reset-css/reset.css"
import { GlobalStyles } from "@styles"

const Title = styled.h1`
  color: var(--green);
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Title>Layout</Title>
      {children}
    </>
  )
}

export default Layout
