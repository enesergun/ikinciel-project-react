import React from 'react';

import AccountButton from '../ButtonGroup/AccountButton';
import AddProductButton from '../ButtonGroup/AddProductButton';
import LoginButton from '../ButtonGroup/LoginButton';

import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import { BrandLogo } from '../../assets/icons'


const Navbar = ({loggenIn}) => {
  return (
    <div className={styles.navbarWrapper}>        
        <div className={styles.brand}>
            <Link to="/index">{/* <img src={brandLogoIndex} alt="" className={styles.brandLogo}/>  */}<BrandLogo width={"110"}/></Link>
            
        </div>
          
        <div className={styles.buttons}>
            { 
                loggenIn ?
                <>
                <Link to="/addproduct">
                   
                   <AddProductButton />
                </Link>
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
