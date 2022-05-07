import { Suspense, lazy } from 'react'

import RegisterGirl from '../../assets/RegisterGirl.webp'
import brandLogo from '../../assets/brandLogo.webp'
import styles from '../style/Register.module.css'

import useWindowSize from "../../hooks/useWindowSize";

import { useAuth } from '../../context/AuthContext'

import { ToastContainer } from 'react-toastify';
import {Navigate} from 'react-router-dom';


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
          width > 375 
          ? 
          <div className={styles.leftSide}>
            <img src={RegisterGirl} alt="registerGirl" className={styles.registerGirl} />
          </div>
          : <span></span>
        }
        <div className={styles.rightSide}>
            <div className={styles.brandLogoWrap}>
                <img src={brandLogo} alt="brandLogo" className={styles.brandLogo} />
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