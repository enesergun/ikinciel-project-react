import { useAuth } from '../../context/AuthContext';

import Navbar from "../../components/Navbar/Navbar";

import { Outlet, NavLink, Navigate } from "react-router-dom";

import styles from '../style/Account.module.css';
import {AccountPicture} from '../../assets/icons';

function Account() {
  const {loggenIn, userMe} = useAuth();

  return (
    <>
      {
        loggenIn 
        ?
        (
        <div className="AccountPage">
          <div className={styles.navbar}>
            <Navbar loggenIn={loggenIn}/>
          </div>

          <div className={styles.container}>

            <div className={styles.AccountInformation}>

              <div className={styles.AccountImg}>
                <AccountPicture />
              </div>

              <div className={styles.AccountAddress}>
                <div><strong>{userMe.email}</strong></div>
              </div>

            </div>

            <div className={styles.Productions}>

              <nav className={styles.tabs}>            
                  <div className={styles.getOffers}>
                    <NavLink to="getoffers" className={({ isActive }) => (isActive ? `${styles.activeTab}` : "")}>Teklif Aldıklarım</NavLink>
                  </div>
                  <div className={styles.giveOffers}>
                    <NavLink to="giveoffers" className={({ isActive }) => (isActive ? `${styles.activeTab}` : "")}>Teklif Verdiklerim</NavLink>
                  </div>
              </nav>        
              <div className={styles.underline}></div>
              <Outlet />          
            </div>
          </div>
        </div>
      )
    : <Navigate replace to="/login" /> 
      }
    </>
    
  )
}

export default Account
