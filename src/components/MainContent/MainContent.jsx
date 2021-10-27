import React, { useState } from 'react';

import './MainContent.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
// import { Container } from './styles';

function MainContent() {
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(0)
  const size = ['S', 'M', 'L']

  const applySelectedStyle = (style) => {
    return selectedSize === style ? { border: '2px solid #e67e34' } : null
  }

  const handleChangeQuantity = (plusOrMinus) => {
    if (plusOrMinus === 'minus') setQuantity(prev => Math.max(0, prev - 1))
    else setQuantity(prev => Math.min(8, prev + 1))
  }

  return (
    <div className="c-main__content">
      <div className="c-main__brand">
        BRAND SWEATSHIRT
        <span className="c-main__price">$500</span>
        <span className="c-main__previous">
          <span style={{ marginLeft: '-8px' }}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </span>
          <span style={{ marginRight: '-10px' }}>PREV</span>
        </span>
      </div>
      <div className="c-main__right">
        <span className="c-main__previous">
          <span style={{ marginLeft: '-8px' }}>NEXT</span>
          <span style={{ marginRight: '-8px' }}>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </span>
        </span>
        <div className="c-main__size">
          {size.map(size => <span
            onClick={() => setSelectedSize(size)}
            style={applySelectedStyle(size)} key={size}>{size}</span>)}
        </div>
        <div className="c-main__qtd">
          <span onClick={() => handleChangeQuantity('minus')}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span style={{ fontWeight: 'bold' }}>{quantity}</span>
          <span onClick={() => handleChangeQuantity('plus')}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <button className="c-main__addCart">
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default MainContent;