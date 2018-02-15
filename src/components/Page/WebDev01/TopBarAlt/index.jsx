// TopBar

import React from 'react'
// import styles from './style.css'
import Responsive from 'react-responsive'
import TopBarDesktop from './TopBarDesktop'
import TopBarPhone from './TopBarPhone'
import Wrapper from './Wrapper'
import { brand, menuItems, breakPoints } from './topbar.config'

const Desktop = ({ children }) => <Responsive minWidth={breakPoints.desktopMinWidth} children={children} />
const Tablet = ({ children }) => <Responsive minWidth={breakPoints.tabletMinWidth} maxWidth={breakPoints.tabletMaxWidth} children={children} />
const Phone = ({ children }) => <Responsive maxWidth={breakPoints.phoneMaxWidth} children={children} />

const TopBar = () => {

  return (
    <Wrapper id='wrapper'>
      <Desktop>
        <TopBarDesktop
          brand={brand}
          menuItems={menuItems}
        />
      </Desktop>
      <Tablet>
        <TopBarDesktop
          brand={brand}
          menuItems={menuItems}
        />
      </Tablet>
      <Phone>
        <TopBarPhone
          brand={brand}
          menuItems={menuItems}
        />
      </Phone>
    </Wrapper>
  )

}

export default TopBar;
