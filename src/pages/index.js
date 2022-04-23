import React from "react"
import styled from "styled-components"
import { Layout } from "@components"
import { devices } from "@styles"

const Title = styled.h1`
  color: var(--blue);
  ${devices.tablet`color: var(--purple)`};
`

const IndexPage = () => {
  return (
    <Layout>
      <Title>Streaker</Title>
    </Layout>
  )
}

export default IndexPage
