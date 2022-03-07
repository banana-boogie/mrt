import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import SearchInput from "../components/SearchInput"

const IndexPage = () => (
  <Layout>
    <Seo title="M.R.T." />
    <Wrapper>
      <SearchBar label="Search" />
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  min-height: 100%;
  margin-bottom: 250px;
`

const SearchBar = styled(SearchInput)`
  width: 638px;
  height: 44px;
  border-radius: 24px;
`

export default IndexPage
