// TopBar

import React from 'react'
import './style.css'
import Responsive from 'react-responsive'
import TopBarDesktop from './TopBarDesktop'
import TopBarPhone from './TopBarPhone'
import { brand, menuItems, breakPoints } from './topbar.config'

const Desktop = ({ children }) => <Responsive minWidth={breakPoints.desktopMinWidth} children={children} />
const Tablet = ({ children }) => <Responsive minWidth={breakPoints.tabletMinWidth} maxWidth={breakPoints.tabletMaxWidth} children={children} />
const Phone = ({ children }) => <Responsive maxWidth={breakPoints.phoneMaxWidth} children={children} />

const TopBar = () => {

  return (
    <div>
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
    </div>
  )

}

export default TopBar;
