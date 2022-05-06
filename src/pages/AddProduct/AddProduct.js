import {useState, useEffect} from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from '../../context/AuthContext';
import styles from '../style/AddProduct.module.css';
import formValidationStyle from '../../components/Form/FormValidation'
import { Navigate } from "react-router-dom";

import { AddProductSchema } from '../../constants/AddProductSchema'
import { Formik, Field } from 'formik';
import Previews from '../../components/DragAndDrop/DragAndDrop';

import Select from 'react-select';



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


function AddProduct() {
  const {loggenIn, userMe} = useAuth();
  const [image, setImage] = useState(sessionStorage.getItem('image') || false);
/*   const [selectedOption, setSelectedOption] = useState(null);
 */

 
  

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
                  ({values, handleChange, handleSubmit, errors, touched, handleBlur, setFieldValue, setFieldTouched  }) =>
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
                          <div className={`${styles.category} ${styles.formGroup}`}>
                            <label className={styles.AddProductLabel}>Kategori</label>

                            <Field
                              className='custom-select'
                              name='category'
                              options={options}
                              component={MySelect}
                              placeholder="Kategori Seçiniz"
                              isMulti={false}
                            />
                            
                              
                              <span>{touched.category && errors.category ? errors.category : ''}</span>
                            
                          </div>
                          <div className={`${styles.brand} ${styles.formGroup}`}>
                          
                          <label className={styles.AddProductLabel}>Marka</label>

                          <select 
                                className={styles.selectWrapper}
                                name="brand"                      
                                value={values.brand}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                >

                                <option value="mavi" label='mavi'>mavi</option>
                                <option value="koton" label='koton'>koton</option>
                                <option value="lcw" label='lcw'>lcw</option>
                                <option value="nike" label='nike'>nike</option>
                          </select>

                          </div>
                        </div>

                        <div className={styles.SelectGroup}>
                          <div className={`${styles.color} ${styles.formGroup}`}>
                            
                            <label className={styles.AddProductLabel}>Renk</label>

                            <select 
                                className={styles.selectWrapper}
                                name="color"                      
                                value={values.color}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                >

                                <option value="yeşil" label='yeşil'>yeşil</option>
                                <option value="sarı" label='sarı'>sarı</option>
                                <option value="turuncu" label='turuncu'>turuncu</option>
                                <option value="kırmızı" label='kırmızı'>kırmızı</option>
                              </select>

                          </div>
                          <div className={`${styles.condition} ${styles.formGroup}`}>

                            <label className={styles.AddProductLabel}>Kullanım Durumu</label>

                            <select 
                                className={styles.selectWrapper}
                                name="condition"                      
                                value={values.condition}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                >

                                <option value="güzel" label='güzel'>güzel</option>
                                <option value="idare eder" label='idare eder'>idare eder</option>
                                <option value="harika" label='harika'>harika</option>
                                <option value="pis" label='pis'>pis</option>
                              </select>
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



function MySelect({className, name, options, field, form, isMulti= false, placeholder}) {

  const onChange = (option) => {
    form.setFieldValue(field.name, option.value)

  }
  return (
    <>
      <Select
          className={className}
          name={field.name}
          /* value={getValue()} */
          onChange={onChange}
          placeholder={placeholder}
          options={options}
          isMulti={isMulti}
      />      
    </>
  )
  
}
















/* <div className={styles.productDetails}>
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

                      
                        <select name="categories" className={styles.selectWrapper}>
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
              </div> */