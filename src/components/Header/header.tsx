import * as React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.header`
  display: flex;
  flex-direction: row-reverse;
`

const Title = styled.h1`
  font-size: 72px;
  margin-right: 12px;
`

const Link = styled(GatsbyLink)`
  color: var(--color-gray-900);
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Title>
      <Link to="/">{siteTitle}</Link>
    </Title>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
