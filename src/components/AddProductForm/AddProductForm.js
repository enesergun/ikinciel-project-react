import React from 'react';
import { useProduct } from '../../context/ProductContext';

import { AddProductSchema } from '../../constants/AddProductSchema';

import styles from '../../pages/style/AddProduct.module.css';

import SelectOptions from '../../components/SelectOptions/SelectOptions';

import { Formik, Field } from 'formik';
import { ToastContainer } from 'react-toastify';

import FormValidationStyle from '../Form/FormValidation.module.css';



const AddProductForm = ({token}) => {
    const { AddProduct, image} = useProduct();
    

    const handleAddProduct = async (values) => {
        
        if (image) {                      
            AddProduct(values, token)
        }
    }
   

  return (
    <>
        <Formik
               initialValues={{
                name: '',
                description:'',
                category:'',                
                status:'',
                price:'', 
                isOfferable: false                
                
               }}
               onSubmit={(values, { resetForm }, errors) => {                                 
                handleAddProduct(values);
                resetForm();                 
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
                          <label className={`${styles.AddProductLabel} ${styles.required}`}>Ürün Adı</label>
                          <input 
                            id={touched.name && errors.name ? FormValidationStyle.errorName : ' '} 
                            type="text"
                            name="name"                      
                            value={values.name}
                            onChange={(handleChange)}
                            onBlur={handleBlur} />
                            
                        </div>

                        <div className={`${styles.description} ${styles.formGroup}`}>
                          <label className={`${styles.AddProductLabel} ${styles.required}`}>Açıklama</label>
                          <input
                            className={styles.DescriptionInput}
                            type="text"
                            id={touched.description && errors.description ? FormValidationStyle.errorDescription : ' '} 
                            name="description"                      
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        </div>

                        <div className={styles.SelectGroup}>
                          <div className={`${styles.category} ${styles.formGroup}`} >
                            <label className={`${styles.AddProductLabel} ${styles.required}`}>Kategori</label>

                            <Field
                              className='categories'
                              name='category'
                              id={touched.category && errors.category ? FormValidationStyle.errorCategory : ' '} 
                              component={SelectOptions}
                              placeholder="Kategori Seçiniz"   
                              onClick={() => console.log('fielda tıkladın')}                             
                            />    
                            <span className={styles.error}>{touched.category && errors.category ? errors.category : ''}</span>
                          </div>
                          <div className={`${styles.brand} ${styles.formGroup}`}>
                          
                          <label className={`${styles.AddProductLabel}`}>Marka</label>

                          
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
                            
                            <label className={`${styles.AddProductLabel}`}>Renk</label>

                           

                            <Field
                              className='colors'
                              name='color'
                              
                              component={SelectOptions}
                              placeholder="Renk Seçiniz"                              
                            />


                          </div>
                          <div className={`${styles.condition} ${styles.formGroup}`}>

                            <label className={`${styles.AddProductLabel} ${styles.required}`}>Kullanım Durumu</label>

                           
                               <Field
                                className='using-statuses'
                                name='status'
                                
                                component={SelectOptions}
                                placeholder="Kullanım durumu seçiniz"
                              />
                            <span className={styles.error}>{touched.status && errors.status ? errors.status : ''}</span>
                          </div>
                        </div>
                        <div className={`${styles.price} ${styles.formGroup}`}>
                          <label className={`${styles.AddProductLabel} ${styles.required}`}>Fiyat</label>
                          <input 
                            /* style={{width: '30%'}} */
                            className={styles.price}
                            type="number" 
                            name="price" 
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                          />
                          <span className={styles.error}>{touched.price && errors.price ? errors.price : ''}</span>
                        </div>
                        <div className={styles.offerable}>
                        <label class={`${styles.switch} ${styles.notRequired}`}>
                          <p>Teklif opsiyonu</p>
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
                      <button type='submit' className={styles.AddProductButton} onClick={handleSubmit}>KAYDET</button>
                    </form>

                  </div>
                }
              </Formik>
        <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/>
    </>
  )
}

export default AddProductForm
