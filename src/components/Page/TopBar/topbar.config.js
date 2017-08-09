import iLogo from './tvc.new.03.svg'

export const brand = {
  logo: iLogo,
  brandName: 'Tri-Valley Coders',
  brandColor: '#34E97C',
  brandSizePhone: '5vw',
  brandSizeDesktop: '3.2vw',
}

export const menuItems = [
  {
    label: 'Learn',
    href: '#learn'
  },
  {
    label: 'Events',
    href: '#events',
  },
  {
    label: 'Members',
    href: '#members',
  },
  {
    label: 'Sponsors',
    href: '#sponsors',
  }
]

export const breakPoints = {
  desktopMinWidth: 992,
  tabletMinWidth: 768,
  tabletMaxWidth: 991,
  phoneMaxWidth: 769,
}

export default { brand, menuItems, breakPoints }
