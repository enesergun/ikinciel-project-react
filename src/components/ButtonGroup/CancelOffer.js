import React from 'react';

import { ToastContainer } from 'react-toastify';

import styles from './ButtonGroup.module.css';

const CancelOffer = ({handleDeleteOffer}) => {
  

  return (
    <>
      <button className={styles.offerButton} onClick={handleDeleteOffer}>Teklifi Geri Çek</button>
      <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/>
    </>
  )
}

export default CancelOffer
