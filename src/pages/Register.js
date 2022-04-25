import React from 'react'

import RegisterGirl from '../assets/RegisterGirl.png'
import brandLogo from '../assets/brandLogo.png'

import FormValidation from '../components/Form/FormValidation'
import { useAuth } from '../context/AuthContext'

import {Navigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Register() {

  const {register, loggenIn} = useAuth();


{/* <Navigate replace to="/home" /> */}
  
  return (
    <>
    {
      loggenIn 
      ? <Navigate replace to="/home" /> 
      :
      <div className="registerPage">
      <div className="leftSide">
          <img src={RegisterGirl} alt="registerGirl" className='registerGirl' />
      </div>
      <div className="rightSide">
          <div className="brandLogo">
              <img src={brandLogo} alt="brandLogo" className='brandLogo' />
          </div>
          {/* üye ol, yararlanmak için, buton üye ol */}
          <FormValidation 
              ComponentType={'Üye ol'} 
              text={'Fırsatlardan yararlanmak için üye ol!'} 
              isAlready={'Hesabın var mı?'} 
              Route={'Giriş Yap'}
              RoutePath={'signin'}
              Authentication={register}/>
      </div>
      <ToastContainer hideProgressBar={true}/>
  </div>
    }
    </>
  )
}

export default Register