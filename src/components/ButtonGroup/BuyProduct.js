import React from 'react';
import Modal from "react-modal";

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
                    </Modal> 
    </>
  )
}

export default BuyProduct
