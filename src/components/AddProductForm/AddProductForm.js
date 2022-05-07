import React, {useState} from 'react'

import { AddProductSchema } from '../../constants/AddProductSchema'
import { Formik, Field } from 'formik';

import styles from '../../pages/style/AddProduct.module.css';
import FormValidationStyle from '../Form/FormValidation.module.css'

import { Options } from "../../services/productsService";

import SelectOptions from '../../components/SelectOptions/SelectOptions'

import { useProduct } from '../../context/ProductContext';




const AddProductForm = () => {
    const { AddProduct, image} = useProduct();

    const handleAddProduct = async (values) => {
        
        if (image) {                      
            AddProduct(values)
        }
    }
   

  return (
    <>
        <Formik
               initialValues={{
                name: '',
                description:'',
                category:'',
                color:'',
                status:'',
                isOfferable: false                
                
               }}
               onSubmit={values => {
                /*  if (sessionStorage.getItem('image')) {
                   console.log('image var');                  
                 } else {
                   console.log('image yok');
                 } */
                 handleAddProduct(values);
               }}
               validationSchema={AddProductSchema}              
              >
                {
                  ({values, handleChange, handleSubmit, errors, touched, handleBlur, }) =>
                  <div className={styles.productDetails}>
                    <div className={styles.header}>Ürün Detayları</div>
                    <form>
                      <div className={styles.addProductForm}>
                        <div className={`${styles.productName} ${styles.formGroup}`}>
                          <label className={styles.AddProductLabel}>Ürün Adı</label>
                          <input 
                            type="text"
                            name="name"                      
                            value={values.name}
                            onChange={(handleChange)}
                            onBlur={handleBlur} />
                            {/* <span>{touched.name && errors.name ? errors.name : ''}</span> */}
                        </div>

                        <div className={`${styles.description} ${styles.formGroup}`}>
                          <label className={styles.AddProductLabel}>Açıklama</label>
                          <input
                            type="text"
                            name="description"                      
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        </div>

                        <div className={styles.SelectGroup}>
                          <div className={`${styles.category} ${styles.formGroup}`} >
                            <label className={styles.AddProductLabel}>Kategori</label>

                            <Field
                              className='categories'
                              name='category'
                              
                              component={SelectOptions}
                              placeholder="Kategori Seçiniz"   
                              onClick={() => console.log('fielda tıkladın')}                             
                            />
                            
                              
                              <span>{touched.category && errors.category ? errors.category : ''}</span>
                            
                          </div>
                          <div className={`${styles.brand} ${styles.formGroup}`}>
                          
                          <label className={styles.AddProductLabel}>Marka</label>

                          
                            <Field
                                className='brands'
                                name='brand'
                                
                                component={SelectOptions}
                                placeholder="Marka Seçiniz"                              
                            />

                          </div>
                        </div>

                        <div className={styles.SelectGroup}>
                          <div className={`${styles.color} ${styles.formGroup}`}>
                            
                            <label className={styles.AddProductLabel}>Renk</label>

                           

                            <Field
                              className='colors'
                              name='color'
                              
                              component={SelectOptions}
                              placeholder="Renk Seçiniz"                              
                            />


                          </div>
                          <div className={`${styles.condition} ${styles.formGroup}`}>

                            <label className={styles.AddProductLabel}>Kullanım Durumu</label>

                           
                               <Field
                                className='using-statuses'
                                name='status'
                                
                                component={SelectOptions}
                                placeholder="Kullanım durumu seçiniz"
                            />
                          </div>
                        </div>
                        <div className={`${styles.price} ${styles.formGroup}`}>
                          <label className={styles.AddProductLabel}>Fiyat</label>
                          <input 
                            type="number" 
                            name="price" 
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            />
                        </div>
                        <div className={styles.offerable}>
                        <label class={styles.switch}>
                          offerable
                          <input 
                            type="checkbox"
                            name='isOfferable'
                            checked={values.isOfferable}
                            value={values.isOfferable}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            />
                          <span class={`${styles.slider} ${styles.round}`}></span>                    
                        </label>                                                          
                        </div>
                      </div>
                      <button type='submit' className={styles.AddProductButton} onClick={handleSubmit}>SUBMIT</button>
                    </form>

                  </div>
                }

              </Formik>
    </>
  )
}

export default AddProductForm
