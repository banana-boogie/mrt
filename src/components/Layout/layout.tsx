/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../GlobalStyles"

import Header from "../Header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <GlobalStyles />
      <AppWrapper>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Main>{children}</Main>
      </AppWrapper>
      <Footer>© {new Date().getFullYear()} M.R.T.</Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  min-height: 100%;
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
`

const Footer = styled.footer`
  align-self: flex-end;
  margin-right: 4px;
  color: var(--color-gray-700);
`

export default Layout
