/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {createGlobalStyle} from 'styled-components';
import Navbar from '../components/globals/navbar'

// import "./layout.css"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Verdana', sans-serif;
    color: #262626;
    background: #fff;
  }
`

export default Layout
