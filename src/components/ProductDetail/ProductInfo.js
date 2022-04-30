import React from 'react'

const ProductInfo = ({productName, productBrand, productColor, productCondition, productPrice}) => {
  return (
    <>
        <div className="name">
                    <p>{productName}</p>
                </div>

                <div className="features">
                    <div className="ProductBrand">
                        <div className='featureName'><strong>Marka:</strong></div>
                        <span>{productBrand}</span>                        
                    </div>
                    <div className="productColor">
                        <div className='featureName'><strong>Renk:</strong></div>
                        <span>{productColor}</span>
                    </div>
                    <div className="productCondition">
                        <div className='featureName'><strong>Kullanım Durumu:</strong></div>
                        <span>{productCondition}</span>
                    </div>
                </div>

                <div className="productPrice">
                    <h1>{productPrice} TL</h1>
                </div>
    </>
  )
}

export default ProductInfo;
