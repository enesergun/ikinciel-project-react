import React from 'react'

import styles from './ButtonGroup.module.css'

const CancelOffer = ({handleDeleteOffer}) => {

  return (
    <button className={styles.offerButton} onClick={handleDeleteOffer}>Teklifi Geri Çek</button>
  )
}

export default CancelOffer
