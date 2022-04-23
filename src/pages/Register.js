import React from 'react'
import { Formik } from 'formik';

import RegisterGirl from '../assets/RegisterGirl.png'
import brandLogo from '../assets/brandLogo.png'
import {RegisterSchema} from '../constants/yupSchema'


function Register() {
  return (
    <div className="registerPage">
        <div className="leftSide">
            <img src={RegisterGirl} alt="registerGirl" className='registerGirl' />
        </div>
        <div className="rightSide">
            <div className="brandLogo">
                <img src={brandLogo} alt="brandLogo" className='brandLogo' />
            </div>

            <div className="formValidation">
               <div className="header">
                   <h1>Üye Ol</h1>
                   <p>Fırsatlardan yararlanmak için üye ol!</p>
               </div>
                <div className="form">
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
                                        type="text"
                                        name="email"
                                        placeholder='Eposta adresinizi giriniz'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    <span className="error">{touched.email && errors.email}</span>
                                </div>

                                <div className="formGroup">
                                    <label>Şifre</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder='Lütfen Şifrenizi Giriniz'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    <span className="error">{touched.password && errors.password}</span>
                                </div>

                                <div className="formGroup">
                                    <button className="registerButton" type='submit' onClick={handleSubmit}>Üye Ol</button>
                                </div>
                            </form>   
                        }
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register