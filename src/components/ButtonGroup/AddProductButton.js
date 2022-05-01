import React from 'react'

import styles from "./ButtonGroup.module.css";

const AddProductButton = () => {
  return (
    <div className={styles.addProductButton}>            
        <button className={styles.navbarButton}>Ürün Ekle</button>
    </div>
  )
}

export default AddProductButton
