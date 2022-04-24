import React from 'react'
import { Formik } from 'formik';
import { RegisterSchema } from '../../constants/yupSchema'
import FormButton from '../ButtonGroup/FormButton'

const FormValidation = ({ComponentType, text, isAlready, Route}) => {
    console.log(ComponentType);
  return (
    <div className="formValidation">
               <div className="header">
                   <h1>{ComponentType}</h1>
                   <p>{text}</p>
               </div>
                <div className="formContainer">
                    <Formik 
                    initialValues={{                                                 
                        email: '',                        
                        password: '',                    
                        }} 
                    validationSchema={RegisterSchema}>
                        {
                         ({ values, handleChange, handleSubmit, errors, touched, handleBlur  }) => 
                            <form>
                                <div className="formGroup">
                                    <label>Email</label>
                                    <input
                                        id={touched.email && errors.email ? `errorEmail` : "email"}                                        
                                        type="text"
                                        name="email"
                                        placeholder='Example@example.com'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>                                    
                                </div>

                                <div className="formGroup">
                                    <label>Şifre</label>
                                    <input
                                        id={touched.password && errors.password ? `errorPassword` : "password"}                                        
                                        type="password"
                                        name="password"
                                        placeholder='Lütfen Şifrenizi Giriniz'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>                                    
                                </div>
                                
                                <FormButton handleSubmit={handleSubmit} content={ComponentType}/>
                                
                            </form>   
                        }
                    </Formik>
                </div>
                <div className='alreadyAccount'> 
                    <p>{isAlready} <a href=""> {Route} </a></p>
                </div>
            </div>
  )
}

export default FormValidation