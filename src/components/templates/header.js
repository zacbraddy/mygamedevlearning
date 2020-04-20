import React, { useState } from 'react'
import NavControl from '../organisms/NavControl'

const Header = () => {
  return (
    <nav className="fixed top-0 flex justify-center w-full p-4 border-b-8 bg-primary-400 border-secondary-400">
      <NavControl />
    </nav>
  )
}

export default Header
