import {Suspense, lazy} from 'react'

import { useAuth } from '../../context/AuthContext'

import useWindowSize from "../../hooks/useWindowSize";

import {Navigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import RegisterGirl from '../../assets/RegisterGirl.webp'
import { BrandLogo } from '../../assets/icons'
import styles from '../style/Register.module.css'
import 'react-toastify/dist/ReactToastify.css';

const FormValidation = lazy(() => import('../../components/Form/FormValidation'));

function Register() {

  const {register, loggenIn} = useAuth();
  const [width] = useWindowSize(400, 600);

  
  return (
    <>
    {
      loggenIn 
      ? <Navigate replace to="/index" /> 
      :
      <div className={styles.registerPage}>
       {
         width > 768
         ? 
        <div className={styles.leftSide}>
          <img src={RegisterGirl} alt="registerGirl" className={styles.registerGirl} />
        </div> 
        : <span></span>         
       }
      <div className={styles.rightSide}>
          <div className={styles.brandLogoWrap}>
          <BrandLogo width={"200"} height={"60"}/>
          </div>
          {/* üye ol, yararlanmak için, buton üye ol */}
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <FormValidation 
              ComponentType={'Üye ol'} 
              text={'Fırsatlardan yararlanmak için üye ol!'} 
              isAlready={'Hesabın var mı?'} 
              Route={'Giriş Yap'}
              RoutePath={'login'}
              Authentication={register}/>
          </Suspense>
      </div>
      <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/>
  </div>
    }
    </>
  )
}

export default Register