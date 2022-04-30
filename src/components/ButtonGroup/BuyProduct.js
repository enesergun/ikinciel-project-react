import React from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

Modal.setAppElement("#root");

const BuyProduct = ({toggleModalBuy, isOpenBuy, loggenIn}) => {
  return (
    <>
        <button className='buyButton' onClick={toggleModalBuy}>Satın Al</button>
                    <Modal
                        isOpen={isOpenBuy}
                        onRequestClose={toggleModalBuy}
                        contentLabel="BuyModal"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                            >
                                {
                                    loggenIn 
                                    ?
                                    <div className="buyButtonModal">    
                                        <p><strong>Satın Al</strong></p>                                

                                        <div className="PopUpContent">
                                            <p>Satın almak istiyor musunuz?</p>
                                        </div>

                                        <div className="PopUpButtons">
                                            <button className='Quit' onClick={toggleModalBuy}>Vazgeç</button>
                                            <button className='buyButton'>Satın Al</button>
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
