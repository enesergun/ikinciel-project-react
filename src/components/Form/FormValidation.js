import React from 'react'

import { RegisterSchema } from '../../constants/RegisterSchema';
import FormButton from '../ButtonGroup/FormButton';

import { Formik } from 'formik';
import {Link} from 'react-router-dom';

import styles from './FormValidation.module.css'

const FormValidation = ({ComponentType, text, isAlready, Route, RoutePath, Authentication}) => {
    
  return (
    <div className={styles.formValidation}>
               <div className={styles.header}>
                   <h1>{ComponentType}</h1>
                   <p>{text}</p>
               </div>
                <div className={styles.formContainer}>
                    <Formik 
                    initialValues={{                                                 
                        email: '',                        
                        password: '',                    
                        }}
                    onSubmit={auth => {
                        Authentication(auth);
                    }} 
                    validationSchema={RegisterSchema}>
                        {
                         ({ values, handleChange, handleSubmit, errors, touched, handleBlur  }) => 
                            <form>
                                <div className={styles.formGroup}>
                                    <label className={styles.labelText}>Email</label>
                                    <input
                                        id={touched.email && errors.email ? styles.errorEmail : styles.email}                                        
                                        type="text"
                                        name="email"
                                        placeholder='Example@example.com'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>                                    
                                </div>

                                <div className="formGroup">
                                    <label>??ifre</label>
                                    <input
                                        id={touched.password && errors.password ? styles.errorPassword : styles.password}                                        
                                        type="password"
                                        name="password"
                                        placeholder='L??tfen ??ifrenizi Giriniz'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>                                    
                                </div>
                                
                                <FormButton handleSubmit={handleSubmit} content={ComponentType}/>                                
                            </form>   
                        }
                    </Formik>
                </div>
                <div className={styles.alreadyAccount}> 
                    <p>{isAlready} <Link to={`/${RoutePath}`}>{Route}</Link></p>
                </div>
            </div>
  )
}

export default FormValidation