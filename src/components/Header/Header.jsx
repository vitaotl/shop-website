import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="c-header" >
      <div className="c-header__links">
        <span className="">My account</span>
        <span className="">SEARCH</span>
      </div>
      <span className="c-header__icons">
        <FontAwesomeIcon size={`1x`} icon={faShoppingBag} />
      </span>
      <span className="c-header__icons">
        <FontAwesomeIcon size={`1x`} icon={faBars} />
      </span>
    </header>
  )
}

export default Header