import * as React from "react"
import styled from "styled-components"
import axios from "axios"

import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import SearchInput from "../components/SearchInput"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      //do search
      await search()
    }
  }

  async function search() {
    const query = {
      searchTerm,
    }
    try {
      const response = await axios.post(`/api/search`, query)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <Seo title="M.R.T." />
      <Wrapper>
        <SearchBar
          label="Search"
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Wrapper>
    </Layout>
  )
}

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
