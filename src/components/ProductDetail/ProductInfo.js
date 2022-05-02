import React from 'react'

import styles from "./ProductInfo.module.css";

import { useProduct } from '../../context/ProductContext';

const ProductInfo = ({product, offer}) => {
    const {userMe} = useProduct();
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

                <div className={styles.gotOfferPrice}>
                    {
                        offer 
                        ? 
                        <div className={styles.gotOfferPrice}>
                            <div className={styles.Offer}>Verilen teklif : <strong>{offer.offerPrice} TL </strong></div>
                        </div>
                        : <span></span>
                    }
                  
                </div>
    </>
  )
}

export default ProductInfo;
