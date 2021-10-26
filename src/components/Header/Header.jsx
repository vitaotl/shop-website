import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <span>My account</span>
      <span>SEARCH</span>
      <span>
        <FontAwesomeIcon size={`${2}}x`} icon={faShoppingBag} />
      </span>
      <span>
        <FontAwesomeIcon size={`${2}}x`} icon={faBars} />
      </span>
    </header>
  )
}

export default Header