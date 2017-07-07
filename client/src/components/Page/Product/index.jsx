import React from 'react';
import './style.css'

const Product = () => {
  let product = navigator.product;
  return (
      <h1 className='product'>Product: {product}</h1>
  )
}

export default Product;
