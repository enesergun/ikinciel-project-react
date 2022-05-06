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


const customStyles = {
  indicatorSeparator: (provided) => ({
    display: 'none',
  }),
  input: (provided) => ({
    margin: 0,
  }),
  container: (provided, state) => ({
    ...provided,
    /* height: 40, */
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#ccc',
    height: 40,
  })
  
  /* option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "black",
    backgroundColor: 'white',
    fontSize: 20
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'green',
    fontSize: 20
  }) */
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const optionsBrand = [
  { value: 'marka1', label: 'marka1' },
  { value: 'marka2', label: 'marka2' },
  { value: 'marka3', label: 'marka3' },
];

const optionsColor = [
  { value: 'renk1', label: 'renk1' },
  { value: 'renk2', label: 'renk2' },
  { value: 'renk3', label: 'renk3' },
];


const optionsStatus = [
  { value: 'status1', label: 'status1' },
  { value: 'status2', label: 'status2' },
  { value: 'status3', label: 'status3' },
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
                            />
                            
                              
                              <span>{touched.category && errors.category ? errors.category : ''}</span>
                            
                          </div>
                          <div className={`${styles.brand} ${styles.formGroup}`}>
                          
                          <label className={styles.AddProductLabel}>Marka</label>

                          
                            <Field
                                className='custom-select'
                                name='brand'
                                options={optionsBrand}
                                component={MySelect}
                                placeholder="Marka Seçiniz"                              
                            />

                          </div>
                        </div>

                        <div className={styles.SelectGroup}>
                          <div className={`${styles.color} ${styles.formGroup}`}>
                            
                            <label className={styles.AddProductLabel}>Renk</label>

                           

                            <Field
                              className='custom-select'
                              name='color'
                              options={optionsColor}
                              component={MySelect}
                              placeholder="Renk Seçiniz"                              
                            />


                          </div>
                          <div className={`${styles.condition} ${styles.formGroup}`}>

                            <label className={styles.AddProductLabel}>Kullanım Durumu</label>

                           
                               <Field
                                className='custom-select'
                                name='condition'
                                options={optionsStatus}
                                component={MySelect}
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



function MySelect({className, name, options, field, form, placeholder}) {

  const onChange = (option) => {
    form.setFieldValue(field.name, option.value)

  }
  return (
    <>
      <Select
          className={className}
          name={field.name}          
          onChange={onChange}
          placeholder={placeholder}
          options={options}  
          styles={customStyles}
      />      
    </>
  )
  
}

