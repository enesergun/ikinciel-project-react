import React, {useState} from 'react'

import { AddProductSchema } from '../../constants/AddProductSchema'
import { Formik, Field } from 'formik';

import styles from '../../pages/style/AddProduct.module.css';
import FormValidationStyle from '../Form/FormValidation.module.css'

import { Options } from "../../services/productsService";

import SelectOptions from '../../components/SelectOptions/SelectOptions'


const selectItems = ['categories', 'brands', 'colors', 'using-statuses']

export const AddProductForm = () => {
    const [options, setOptions] = useState([])

    const handleOptions= async (endpoint) => {
        let data = [];
        let newData = [];
        if (endpoint === "Kategori Seçiniz") {
            const res = await Options('categories');
            data = res;

        } else if (endpoint === "Marka Seçiniz") {
            const res = await Options('brands');        
            data = res;

        } else if (endpoint === "Renk Seçiniz" ) {
           const res = await Options('colors');           
           data = res;

        } else if (endpoint === "Kullanım durumu seçiniz") {
            const res = await Options('using-statuses');            
            data = res;

        } else {
            console.log("Yanlış yer.")
        }

        for (let i = 0; i < data.length; i++) {
            newData.push({id: data[i].id, value: data[i].id, label: data[i].name});            
        }

        setOptions(newData);
    }

  return (
    <>
        <Formik
               initialValues={{
                name: '',
                description:'',
                category:'',
                color:'',
                condition:'',
                offerable: false                
                
               }}
               onSubmit={values => {
                /*  if (sessionStorage.getItem('image')) {
                   console.log('image var');                  
                 } else {
                   console.log('image yok');
                 } */
                 console.log(values)
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
                              options={options}
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
                                options={options}
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
                              options={options}
                              component={SelectOptions}
                              placeholder="Renk Seçiniz"                              
                            />


                          </div>
                          <div className={`${styles.condition} ${styles.formGroup}`}>

                            <label className={styles.AddProductLabel}>Kullanım Durumu</label>

                           
                               <Field
                                className='using-statuses'
                                name='condition'
                                options={options}
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
                            name='offerable'
                            checked={values.offerable}
                            value={values.offerable}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            />
                          <span class={`${styles.slider} ${styles.round}`}></span>                    
                        </label>                                                          
                        </div>
                      </div>
                      <button type='submit' onClick={handleSubmit}>SUBMIT</button>
                    </form>

                  </div>
                }

              </Formik>
    </>
  )
}
