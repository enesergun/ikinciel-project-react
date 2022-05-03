import React from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

import styles from './ButtonGroup.module.css'

Modal.setAppElement("#root");

const BuyProduct = ({toggleModalBuy, isOpenBuy, loggenIn, handleBuyProduct}) => {
  return (
    <>
        <button className={styles.buyButton} onClick={toggleModalBuy}>Satın Al</button>
                    <Modal
                        isOpen={isOpenBuy}
                        onRequestClose={toggleModalBuy}
                        contentLabel="BuyModal"
                        className={styles.mymodal}
                        overlayClassName={styles.myoverlay}
                        closeTimeoutMS={500}
                            >
                                {
                                    loggenIn 
                                    ?
                                    <div className={styles.buyButtonModal}>    
                                        <p><strong>Satın Al</strong></p>                                

                                        <div className={styles.PopUpContent}>
                                            <p>Satın almak istiyor musunuz?</p>
                                        </div>

                                        <div className={styles.PopUpButtons}>
                                            <button className={styles.Quit} onClick={toggleModalBuy}>Vazgeç</button>
                                            <button className={styles.buyButton} onClick={handleBuyProduct}>Satın Al</button>
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

export default BuyProduct
