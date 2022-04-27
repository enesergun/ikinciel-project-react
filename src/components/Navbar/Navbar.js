import React from 'react'
import brandLogoIndex from '../../assets/brandLogoIndex.svg'
import AccountButton from '../ButtonGroup/AccountButton'
import AddProductButton from '../ButtonGroup/AddProductButton'
import LoginButton from '../ButtonGroup/LoginButton'

import { Link } from "react-router-dom";


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
                <Link to="/addproduct"><AddProductButton /></Link>
                <Link to="/account"><AccountButton /></Link>
                </>                
                :
                <Link to="/login"><LoginButton /></Link>
            }                     
        </div>
    </div>
  )
}

export default Navbar
