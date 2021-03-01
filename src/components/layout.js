import React from "react"
import {Link} from "gatsby";

import LandingPage from "./LandingPage.js";
import "../sass/layout/layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="test-layout">
      {children}
    </div>
  )
}

export default Layout
