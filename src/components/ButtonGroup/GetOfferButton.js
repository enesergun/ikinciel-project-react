import { useState } from 'react'
import { Formik, Form} from 'formik';
import Modal from "react-modal";
import { baseURL } from '../../constants/axios';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

import { useProduct } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';

import  errorPopup  from '../../utils/PopUpFunctions/errorPopup'
import styles from './ButtonGroup.module.css'

import { ToastContainer } from 'react-toastify';


Modal.setAppElement("#root");


/* teklif verdiğinde pop up kapanmalı  */


const GetOfferButton = ({product}) => {    
    const [isOpen, setIsOpen] = useState(false);
    const {getOffer} = useProduct();
    const {loggenIn} = useAuth();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleOffer = (values) => {

    let offer;

    if ((values.checked.length > 0 &&  values.checked.length <= 1 && !values.OfferPrice) || (values.OfferPrice && values.checked.length === 0)) {
        if (values.checked[0] === '20') {
            offer = ((product.price / 100) * 20).toFixed(1);
            
        } else if (values.checked[0] === '30') {
            offer = ((product.price / 100) * 30).toFixed(1);

        } else if (values.checked[0] === '40') {
            offer = ((product.price / 100) * 40).toFixed(1);

        } else if (values.OfferPrice) {
            offer = values.OfferPrice;
        }
        getOffer(offer, product.id);   
        

    } else if ( values.checked.length >= 1 && values.OfferPrice) {
        console.log("Lütfen en fazla bir tane seçenek işaretleyin.");
        errorPopup("Lütfen en fazla bir tane seçenek işaretleyin.");
    } else {
      console.log("Lütfen en fazla bir tane seçenek işaretleyin.");
      errorPopup("Lütfen en fazla bir tane seçenek işaretleyin.");
    }       
  }

    
    
  return (
    <>
        <button className={styles.offerButton} onClick={toggleModal}>Teklif Ver</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className={styles.mymodalOffer}
                overlayClassName={styles.myoverlay}
                closeTimeoutMS={500}
            >
                {
                    loggenIn ?
                    <div className={styles.popup}>
                    <div className={styles.PopUpheader}>
                        <p>Teklif Ver</p>
                        <button onClick={toggleModal}>x</button>
                    </div>

                    <div className={styles.productInfo}>                                        
                        <img className={styles.popUpImage} src={baseURL + product.image?.formats.thumbnail.url} alt="" />                                        

                        <div className={styles.popupNameWrap}>
                            <div className={styles.popupName}>
                                {product.name}
                            </div>
                        </div>  
                        
                        <div className={styles.popupPrice}><strong>{product.price} TL</strong></div>                                          
                    </div>
                    
                    <div className={styles.offerPercentage}>
                        <Formik
                            initialValues={{                                
                                checked: [],                                            
                            }}
                            onSubmit={(values) => {
                                handleOffer(values);
                                /* console.log(values); */
                                
                            }}                                                                                                      
                            >
                            {({values, handleChange}) => (
                                <Form>
                                    <div className={styles.checkBoxGroup} role="group" aria-labelledby="checkbox-group">
                                        <label className={`${styles.offer} ${styles.offerTwelvePercentage}`}>
                                            <input 
                                                type="checkbox" 
                                                name="checked" 
                                                value="20" 
                                                checked={values.checked.includes('20')}
                                                onChange={handleChange}
                                                /* onClick={() => setChecked({'TwelvePercentage' : true})} */
                                            />                        
                                            <span>%20'si kadar teklif ver</span>
                                        </label>

                                        <label className={`${styles.offer} ${styles.offerThirtyPercentage}`}>
                                            <input 
                                                type="checkbox" 
                                                name="checked" 
                                                value="30" 
                                                checked={values.checked.includes('30')}
                                                onChange={handleChange}
                                                /* onClick={() => setChecked({'ThirtyPercentage' : true})} */
                                            />
                                                <span>%30'u Kadar Teklif Ver</span>
                                        </label>
                                                        
                                        <label className={`${styles.offer} ${styles.offerFourtyPercentage}`}>
                                            <input 
                                                type="checkbox" 
                                                name="checked" 
                                                value="40"
                                                checked={values.checked.includes('40')}
                                                /* onClick={(e) => deneme(values.checked)} */
                                                onChange={handleChange}
                                                
                                            />
                                                <span>%40'ı Kadar Teklif Ver</span>
                                        </label>

                                        <label htmlFor="offer offerByNumber">
                                            <input 
                                                type="number" 
                                                name='OfferPrice'
                                                onChange={handleChange}
                                                placeholder="Lütfen Teklif Giriniz"
                                                /* onClick={() => setChecked({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false})} */
                                            />                                                                
                                        </label>
                                    </div>

                                    <div className={styles.popupSubmitButton}>
                                        <button type='submit'>Teklif Ver</button> {/* disabled yapılacak */}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                : 
                <>
                    <div><strong>Lütfen giriş yapınız.</strong></div>
                    <Link to="/login"><LoginButton /></Link>
                </>
                }                
            </Modal>
            <ToastContainer hideProgressBar={true}/>
    </>
  )
}

export default GetOfferButton
