import { Suspense, lazy } from 'react';

import { useAuth } from '../../context/AuthContext';

import useWindowSize from "../../hooks/useWindowSize";

import { ToastContainer } from 'react-toastify';
import {Navigate} from 'react-router-dom';

import RegisterGirl from '../../assets/RegisterGirl.webp'
import styles from '../style/Register.module.css'
import { BrandLogo } from '../../assets/icons'

const FormValidation = lazy(() => import('../../components/Form/FormValidation'));

function SignIn() {

  const { loggenIn, login} = useAuth();
  const [width] = useWindowSize(400, 600);
  
  return (
    <>
      {
      loggenIn ? <Navigate replace to="/index" /> 
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
                {/* <img src={brandLogo} alt="brandLogo" className={styles.brandLogo} /> */}
                <BrandLogo width={"200"} height={"60"}/>
            </div>
            {/* üye ol, yararlanmak için, buton üye ol */}
            <Suspense>
              <FormValidation 
                  ComponentType={'Giriş Yap'} 
                  text={'Fırsatlardan yararlanmak için giriş yap!'} 
                  isAlready={'Hesabın yok mu?'} 
                  Route={'Üye ol'}
                  RoutePath={'register'}
                  Authentication={login}/>
            </Suspense>
        </div>
        <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/>
    </div>
    }
    </>    
  )
}

export default SignIn