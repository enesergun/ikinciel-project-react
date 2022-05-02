import React from 'react'

import RegisterGirl from '../../assets/RegisterGirl.png'
import brandLogo from '../../assets/brandLogo.png'
import styles from '../style/Register.module.css'

import FormValidation from '../../components/Form/FormValidation'
import { useAuth } from '../../context/AuthContext'

import { ToastContainer } from 'react-toastify';
import {Navigate} from 'react-router-dom'


function SignIn() {

  const { loggenIn, login} = useAuth();
  
  return (
    <>
      {
      loggenIn ? <Navigate replace to="/index" /> 
      :
      <div className={styles.registerPage}>
        <div className={styles.leftSide}>
            <img src={RegisterGirl} alt="registerGirl" className={styles.registerGirl} />
        </div>
        <div className={styles.rightSide}>
            <div className={styles.brandLogoWrap}>
                <img src={brandLogo} alt="brandLogo" className={styles.brandLogo} />
            </div>
            {/* üye ol, yararlanmak için, buton üye ol */}
            <FormValidation 
                ComponentType={'Giriş Yap'} 
                text={'Fırsatlardan yararlanmak için giriş yap!'} 
                isAlready={'Hesabın yok mu?'} 
                Route={'Üye ol'}
                RoutePath={'register'}
                Authentication={login}/>
        </div>
        <ToastContainer hideProgressBar={true}/>
    </div>
    }
    </>    
  )
}

export default SignIn