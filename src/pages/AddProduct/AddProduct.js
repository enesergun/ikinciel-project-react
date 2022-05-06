import {useState, useEffect} from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from '../../context/AuthContext';
import styles from '../style/AddProduct.module.css';


import { Navigate } from "react-router-dom";

import Previews from '../../components/DragAndDrop/DragAndDrop';
import { AddProductForm } from '../../components/AddProductForm.js/AddProductForm';






function AddProduct() {
  const {loggenIn, userMe} = useAuth();
  const [image, setImage] = useState(sessionStorage.getItem('image') || false);
/*   const [selectedOption, setSelectedOption] = useState(null);
 */

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

                <AddProductForm />

              <div className={styles.productImage}>
              <div className={styles.header}>Ürün Görseli</div>
              
              <Previews minSize={0} maxSize={400000}/>
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



