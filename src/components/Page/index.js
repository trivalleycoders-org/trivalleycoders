// Page
import React from 'react'
import TopBar from './TopBar'
import Header from './Header'
import Events from './Events'
import Members from './Members'
import Sponsors from './Sponsors'
import Footer from './Footer'
import styles from './style.css'
// import * as ku from '../../lib/ke-utils';

const Page = () => {
    return (
      <div id='page-wrapper' className={styles.pageWrapper}>
        <TopBar />
        <Header />
        <Events />
        <Members />
        <Sponsors />
        <Footer />
      </div>
    )
}

export default Page
