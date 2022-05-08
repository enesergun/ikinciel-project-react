import {useState} from 'react'

import { useAuth } from '../../context/AuthContext';

import Navbar from "../../components/Navbar/Navbar";
import Previews from '../../components/DragAndDrop/DragAndDrop';
import  AddProductForm  from '../../components/AddProductForm/AddProductForm';

import { Navigate } from "react-router-dom";

import styles from '../style/AddProduct.module.css';



function AddProduct() {
  const {loggenIn} = useAuth();
  

const [token] = useState(() => document.cookie.split("=")[1]);

  return (
    <>
      {
        loggenIn ?
        (
          <div className={styles.AddProductPage}>

            <div className={styles.navbar}>
              <Navbar loggenIn={loggenIn}/>
            </div>

            <div className={styles.AddProductContainer}>              

                <AddProductForm token={token}/>

              <div className={styles.productImage}>
              <div className={styles.header}>Ürün Görseli</div>
              
              <Previews maxFileSize={400000} acceptType={['jpg', 'jpeg', 'png']}/>
              </div>
            </div>

          </div>
        )
        : <Navigate replace to="/login" /> 
      }

    </>
  )
}

export default AddProduct



