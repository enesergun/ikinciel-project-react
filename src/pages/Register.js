import React from 'react'

import RegisterGirl from '../assets/RegisterGirl.png'
import brandLogo from '../assets/brandLogo.png'

import FormValidation from '../components/Form/FormValidation'


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
            {/* üye ol, yararlanmak için, buton üye ol */}
            <FormValidation 
                ComponentType={'Üye ol'} 
                text={'Fırsatlardan yararlanmak için üye ol!'} 
                isAlready={'Hesabın var mı?'} 
                Route={'Giriş Yap'}/>
        </div>
    </div>
  )
}

export default Register