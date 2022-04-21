import React from "react"
import styled from "styled-components"
import { Layout } from "@components"

const Title = styled.h1`
  color: var(--blue);
`

const IndexPage = () => {
  return (
    <Layout>
      <Title>Streaker</Title>
    </Layout>
  )
}

export default IndexPage
