import {useState, useEffect} from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from '../../context/AuthContext';
import styles from '../style/AddProduct.module.css';
import formValidationStyle from '../../components/Form/FormValidation'
import { Navigate } from "react-router-dom";

import Previews from "../../components/DragAndDrop/DragAndDrop";

function AddProduct() {
  const {loggenIn, userMe} = useAuth();
  return (
    <>
      {
        loggenIn ?
        (
          <div className={styles.AddProductPage}>

            <div className={styles.navbar}>
              <Navbar loggenIn={loggenIn}/>
            </div>

            <div className={styles.AddProductContainer}>              
              <div className={styles.productDetails}>
                <div className={styles.header}>Ürün Detayları</div>
                <div className={styles.addProductForm}>
                  <div className={`${styles.productName} ${styles.formGroup}`}>
                    <label className={styles.AddProductLabel}>Ürün Adı</label>
                    <input type="text" />
                  </div>
                  <div className={`${styles.description} ${styles.formGroup}`}>
                    <label className={styles.AddProductLabel}>Açıklama</label>
                    <input type="text" />
                  </div>

                  <div className={styles.SelectGroup}>
                    <div className={`${styles.category} ${styles.formGroup}`}>
                      <label className={styles.AddProductLabel}>Kategori</label>

                      <select name="categories" id="">
                        <option value="pantol">pantol</option>
                        <option value="tişmört">tişmört</option>
                        <option value="kazak">kazak</option>
                        <option value="ceket">ceket</option>
                      </select>
                    </div>
                    <div className={`${styles.brand} ${styles.formGroup}`}>
                    
                    <label className={styles.AddProductLabel}>Marka</label>

                      <select name="brand" id="">
                        <option value="mavi">mavi</option>
                        <option value="lcw">lcw</option>
                        <option value="koton">koton</option>
                        <option value="nike">nike</option>
                      </select>

                    </div>
                  </div>

                  <div className={styles.SelectGroup}>
                    <div className={`${styles.color} ${styles.formGroup}`}>
                      
                      <label className={styles.AddProductLabel}>Renk</label>

                      <select name="colors" id="">
                        <option value="mavi">mavi</option>
                        <option value="yeşil">yeşil</option>
                        <option value="sarı">sarı</option>
                        <option value="kırmızı">kırmızı</option>
                      </select>

                    </div>
                    <div className={`${styles.condition} ${styles.formGroup}`}>

                      <label className={styles.AddProductLabel}>Kullanım Durumu</label>

                      <select name="contion" id="">
                        <option value="five">five</option>
                        <option value="four">four</option>
                        <option value="three">three</option>
                        <option value="two">two</option>
                      </select>

                    </div>
                  </div>
                  <div className={`${styles.price} ${styles.formGroup}`}>
                    <label className={styles.AddProductLabel}>Fiyat</label>
                    <input type="number" name="price" id="" />
                  </div>
                  <div className={styles.offerable}>
                  <label class={styles.switch}>
                    offerable
                    <input type="checkbox" />
                    <span class={`${styles.slider} ${styles.round}`}></span>                    
                  </label>                                                          
                  </div>
                </div>
              </div>
              <div className={styles.productImage}>
              <div className={styles.header}>Ürün Görseli</div>
              
              <Previews minSize={0} maxSize={400000}/>
              </div>
            </div>

          </div>
        )
        : <Navigate replace to="/login" /> 
      }

    </>
  )
}

export default AddProduct