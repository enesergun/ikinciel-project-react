import React from 'react'

import styles from './ButtonGroup.module.css'
import { ToastContainer } from 'react-toastify';

const CancelOffer = ({handleDeleteOffer}) => {
  

  return (
    <>
      <button className={styles.offerButton} onClick={handleDeleteOffer}>Teklifi Geri Çek</button>
      <ToastContainer hideProgressBar={true}/>
    </>
  )
}

export default CancelOffer
