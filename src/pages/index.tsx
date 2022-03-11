import * as React from "react"
import styled, { keyframes } from "styled-components"
import axios from "axios"

import Icon from "../components/Icon"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import SearchInput from "../components/SearchInput"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      await search()
    }
  }

  async function search() {
    const query = {
      searchTerm,
    }
    try {
      setIsSearching(true)
      const response = await axios.post(`/api/search`, query)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <Layout>
      <Seo title="M.R.T." />
      <Wrapper>
        {isSearching ? (
          <LoadingIcon id="loader" />
        ) : (
          <SearchBar
            label="Search"
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
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

const rotate = keyframes`
  from{
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`
const LoadingIcon = styled(Icon)`
  color: var(--color-primary);
  animation: ${rotate} 2000ms infinite linear;
`

export default IndexPage
