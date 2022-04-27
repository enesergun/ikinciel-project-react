import React from 'react'

const ProductCard = ({index, image, brand, productColor, productPrice}) => {
  return (
    <div className="product" key={index}>
        <div className="productImage">
            <img src={image} alt="" />
        </div>

        <div className="productFeatures">
            <div className="branName">{brand}</div>
            <div className="productColor"><strong>Renk</strong>: {productColor}</div>
        </div>

        <div className="productPrice">{productPrice} TL</div>
    </div>
  )
}

export default ProductCard