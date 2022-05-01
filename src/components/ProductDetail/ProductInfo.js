import React from 'react'

import styles from "./ProductInfo.module.css";

const ProductInfo = ({product}) => {
  return (
    <>
        <div className={styles.name}>
                    <p>{product.name}</p>
                </div>

                <div className={styles.features}>
                    <div className={styles.ProductBrand}>
                        <div className={styles.featureName}><strong>Marka:</strong></div>
                        <span>{product.brand}</span>                        
                    </div>
                    <div className={styles.productColor}>
                        <div className={styles.featureName}><strong>Renk:</strong></div>
                        <span>{product.color}</span>
                    </div>
                    <div className={styles.productCondition}>
                        <div className={styles.featureName}><strong>Kullanım Durumu:</strong></div>
                        <span>{product.status}</span>
                    </div>
                </div>

                <div className={styles.productPrice}>
                    <h1>{product.price} TL</h1>
                </div>
    </>
  )
}

export default ProductInfo;
