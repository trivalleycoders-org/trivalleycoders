// Page
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import WebDev01 from './WebDev01'
import Footer from './Footer'
import styles from './style.css'
// import * as ku from '../../lib/ke-utils';


const Page = () => {
  return (
    <Router >
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/webdev-01' component={WebDev01} />
        {/* <Route path='/' componet={Home} /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default Page
