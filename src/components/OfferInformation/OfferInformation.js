import React from 'react';
import styles from './OfferInformation.module.css';

const OfferInformation = ({text, offerPrice, customStyles}) => {
  return (
    
    <div className={customStyles === 'productDetail' ? styles.gotOfferPriceProductDetail : styles.gotOfferPrice}>
        <div className={styles.Offer}>{text} : <strong>{offerPrice} TL </strong></div>
    </div>

  )
}

export default OfferInformation
