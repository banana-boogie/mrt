import * as React from "react"
import styled, { keyframes } from "styled-components"
import axios from "axios"

import Icon from "../components/Icon"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import SearchInput from "../components/SearchInput"
import TextInput from "../components/TextInput"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("gym")
  const [subreddits, setSubreddits] = React.useState("bjj")
  const [keywords, setKeywords] = React.useState("love, hate, sucks, best")
  const [isSearching, setIsSearching] = React.useState(false)

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      await search()
    }
  }

  async function search() {
    const query = {
      searchTerm,
      keywords,
      subreddits,
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
          <SearchWrapper>
            <SearchBar
              label="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <SubredditInput
              label="Subreddits"
              value={subreddits}
              onChange={e => setSubreddits(e.target.value)}
            />
            <KeywordsInput
              label="Keywords"
              value={keywords}
              onChange={e => setKeywords(e.target.value)}
            />
          </SearchWrapper>
        )}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  margin-bottom: 250px;
`

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SearchBar = styled(SearchInput)`
  width: 638px;
  height: 44px;
  border-radius: 3px;
  border: 2px solid var(--color-white);
`

const SubredditInput = styled(TextInput)``

const KeywordsInput = styled(TextInput)``

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
