import React from 'react'

import { useAuth } from '../../context/AuthContext';

import Navbar from '../../components/Navbar/Navbar';

import {NotFoundHuman} from '../../assets/icons'
import styles from "../style/NotFound.module.css";

function NotFound() {
    const {loggenIn} = useAuth();

  return (
    <div className="NotFoundPage">
        <div className={styles.navbar}>
            <Navbar loggenIn={loggenIn}/>
        </div>

        <div className={styles.ErrorHuman}>
            <h1>HOP HEMŞERİM NEREYE! MUHTEMELEN YANLIŞ YERDESİNİZ</h1>
            <NotFoundHuman />        

        </div>
    </div>
  )
}

export default NotFound