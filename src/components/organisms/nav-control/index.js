import React, { useState } from 'react'
import NavLinksList from '../../molecules/nav-links-list'
import NavLogo from '../../atoms/nav-logo'
import NavMenuButton from '../../atoms/nav-menu-button'
import './styles.css'

export default () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuOpenStyle = menuOpen ? 'h-72' : ''
  return (
    <div
      className={`menu-container flex flex-col lg:items-center w-full h-24 overflow-hidden max-w-4xl lg:h-auto lg:flex-row ${menuOpenStyle}`}
    >
      <div className="flex items-center justify-between">
        <NavLogo />
        <NavMenuButton onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <div className="mt-4 lg:mt-0">
        <NavLinksList />
      </div>
    </div>
  )
}
