import React, { useState } from 'react';

import './SideBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function SideBar() {
  const [selectedIcon, setSelectedIcon] = useState('brand')
  const brands = ['women', 'men', 'shoes', 'brand']
  const icons = [faFacebookF, faTwitter, faInstagram]

  const applySelectedStyle = (style) => {
    return selectedIcon === style ? { color: '#e67e34', fontWeight: 'bold' } : null
  }

  return (
    <aside className="c-sidebar" >
      <ul className="c-ul">
        {brands.map(brand =>
          <li key={brand} onClick={() => setSelectedIcon(brand)}
            className="c-ul__items" style={applySelectedStyle(brand)}>{brand.toUpperCase()}</li>
        )}
      </ul>
      <div className="c-brandsIcon">
        {icons.map((icon, index) =>
          <FontAwesomeIcon key={index} className="c-brandsIcon__icons" size={'1x'} icon={icon} />
        )}
      </div>
    </aside>
  )
}

export default SideBar;