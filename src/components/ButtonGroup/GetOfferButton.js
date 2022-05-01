import { useState } from 'react'
import { Formik, Form} from 'formik';
import Modal from "react-modal";
import { baseURL } from '../../constants/axios';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

import styles from './ButtonGroup.module.css'

Modal.setAppElement("#root");

const GetOfferButton = ({toggleModal, isOpen, product, loggenIn}) => {
  const [checked, setChecked] = useState({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false});

  return (
    <>
        <button className={styles.offerButton} onClick={toggleModal}>Teklif Ver</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className={styles.mymodal}
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
                                toggle: false,
                                checked: [],                                            
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                            }}                                                                               
                            >
                            {({values, handleChange}) => (
                                <Form>
                                    <div className={styles.checkBoxGroup} role="group" aria-labelledby="checkbox-group">
                                        <label className={`${styles.offer} ${styles.offerTwelvePercentage}`}>
                                            <input 
                                                type="checkbox" 
                                                name="checked" 
                                                value="20%" 
                                                checked={checked.TwelvePercentage}
                                                onChange={handleChange}
                                                onClick={() => setChecked({'TwelvePercentage' : true})}
                                            />                        
                                            <span>%20'si kadar teklif ver</span>
                                        </label>

                                        <label className={`${styles.offer} ${styles.offerThirtyPercentage}`}>
                                            <input 
                                                type="checkbox" 
                                                name="checked" 
                                                value="30%" 
                                                checked={checked.ThirtyPercentage}
                                                onChange={handleChange}
                                                onClick={() => setChecked({'ThirtyPercentage' : true})}
                                            />
                                                <span>%30'u Kadar Teklif Ver</span>
                                        </label>
                                                        
                                        <label className={`${styles.offer} ${styles.offerFourtyPercentage}`}>
                                            <input 
                                                type="checkbox" 
                                                name="checked" 
                                                value="40%"
                                                checked={checked.FourtyPercentage}
                                                onChange={handleChange}
                                                onClick={() => setChecked({'FourtyPercentage' : true})}
                                            />
                                                <span>%40'ı Kadar Teklif Ver</span>
                                        </label>

                                        <label htmlFor="offer offerByNumber">
                                            <input 
                                                type="number" 
                                                name='OfferPrice'
                                                onChange={handleChange}
                                                placeholder="Lütfen Teklif Giriniz"
                                                onClick={() => setChecked({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false})}
                                            />                                                                
                                        </label>
                                    </div>

                                    <div className={styles.popupSubmitButton}>
                                        <button>Teklif Ver</button>
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
    </>
  )
}

export default GetOfferButton
