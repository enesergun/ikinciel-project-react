import React from 'react'

const ProductInfo = ({product}) => {
  return (
    <>
        <div className="name">
                    <p>{product.name}</p>
                </div>

                <div className="features">
                    <div className="ProductBrand">
                        <div className='featureName'><strong>Marka:</strong></div>
                        <span>{product.brand}</span>                        
                    </div>
                    <div className="productColor">
                        <div className='featureName'><strong>Renk:</strong></div>
                        <span>{product.color}</span>
                    </div>
                    <div className="productCondition">
                        <div className='featureName'><strong>Kullanım Durumu:</strong></div>
                        <span>{product.status}</span>
                    </div>
                </div>

                <div className="productPrice">
                    <h1>{product.price} TL</h1>
                </div>
    </>
  )
}

export default ProductInfo;
