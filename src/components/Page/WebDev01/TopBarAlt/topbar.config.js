// import iLogo from './tvc.new.03.svg'


export const brand = {
  // logo: iLogo,
  brandName: 'TriValley Coders',
  brandColor: '#34E97C',
  brandSizePhone: '5vw',
  brandSizeDesktop: '3.2vw',
}

export const menuItems = [
  {
    label: 'Home',
    href: 'http://trivalleycoders.com',
  },
  {
    label: 'Events',
    href: 'http://trivalleycoders.com#events',
  },
  {
    label: 'Mentors',
    href: 'http://trivalleycoders.com#mentors',
  },
  {
    label: 'Sponsors',
    href: 'http://trivalleycoders.com#sponsors',
  }
]

export const breakPoints = {
  // Used in various components
  narrowWidthMax: 480,
  mediumWidthMin: 481,
  mediumWidthMax: 1024,
  wideWidthMin: 1025,

  // Used in TopBar
  // Phone
  phoneMaxWidth: 768,
  // Tablet Portrait
  tabletMinWidth: 769,
  tabletMaxWidth: 800,
  // Desktop
  desktopMinWidth: 801,
}

export default { brand, menuItems, breakPoints }

// export const breakPoints = {
//   narrowWidthMax: 480,
//   mediumWidthMin: 481,
//   mediumWidthMax: 1024,
//   wideWidthMin: 1025,
//   // Phone
//   phoneMaxWidth: 768,
//   // Tablet Portrait
//   tabletMinWidth: 769,
//   tabletMaxWidth: 991,
//   // Tablet Landscape
//   // tabletMinWidth: 769,
//   // tabletMaxWidth: 991,
//   // Desktop
//   desktopMinWidth: 992,
// }
