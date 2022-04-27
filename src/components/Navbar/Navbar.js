import React from 'react'
import brandLogoIndex from '../../assets/brandLogoIndex.svg'
import AccountButton from '../ButtonGroup/AccountButton'
import AddProductButton from '../ButtonGroup/AddProductButton'
import LoginButton from '../ButtonGroup/LoginButton'


const Navbar = ({loggenIn}) => {
  return (
    <div className="navbarWrapper">        
        <div className="brand">
            <img src={brandLogoIndex} alt="" />
        </div>
          
        <div className="buttons">
            { 
                loggenIn ?
                <>
                <AddProductButton />
                <AccountButton />
                </>                
                :
                <LoginButton />
            }                     
        </div>
    </div>
  )
}

export default Navbar
