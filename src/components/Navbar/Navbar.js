import React from 'react'
import brandLogoIndex from '../../assets/brandLogoIndex.svg'
import AccountButton from '../ButtonGroup/AccountButton'
import AddProductButton from '../ButtonGroup/AddProductButton'
import LoginButton from '../ButtonGroup/LoginButton'

import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";


const Navbar = ({loggenIn}) => {
  return (
    <div className={styles.navbarWrapper}>        
        <div className={styles.brand}>
            <Link to="/index"><img src={brandLogoIndex} alt="" className={styles.brandLogo}/></Link>
            
        </div>
          
        <div className={styles.buttons}>
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
