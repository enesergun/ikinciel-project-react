import React from 'react'
import {Add} from '../../assets/icons'
import styles from "./ButtonGroup.module.css";

import useWindowSize from "../../hooks/useWindowSize";

const AddProductButton = () => {
  const [width] = useWindowSize(400, 600);

  return (
    <div className={styles.addProductButton}>   
     
        <button className={styles.navbarButton}> 
          {
            width > 375 
            ? 
            <>
              <Add />     
              <span>Ürün Ekle</span>
            </>
            : <Add />
          }
         </button>
    </div>
  )
}

export default AddProductButton
