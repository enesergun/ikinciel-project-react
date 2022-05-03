import React from 'react'
import styles from './OfferInformation.module.css'

const OfferInformation = ({text, offerPrice}) => {
  return (
    
    <div className={styles.gotOfferPrice}>
        <div className={styles.Offer}>{text} : <strong>{offerPrice} TL </strong></div>
    </div>

  )
}

export default OfferInformation
