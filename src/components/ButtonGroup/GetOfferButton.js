import { useState } from 'react'
import { Formik, Form} from 'formik';
import Modal from "react-modal";
import { baseURL } from '../../constants/axios';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

const GetOfferButton = ({toggleModal, isOpen, product, loggenIn}) => {
  const [checked, setChecked] = useState({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false});

  return (
    <>
        <button className='offerButton' onClick={toggleModal}>Teklif Ver</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                {
                    loggenIn &&
                    <div className="popup">
                    <div className="PopUpheader">
                        <p>Teklif Ver</p>
                        <button onClick={toggleModal}>x</button>
                    </div>

                    <div className="productInfo">                                        
                        <img className="popUpImage" src={baseURL + product.image?.formats.thumbnail.url} alt="" />                                        

                        <div className="popupNameWrap">
                            <div className="popupName">
                                {product.name}
                            </div>
                        </div>  
                        
                        <div className="popupPrice"><strong>{product.price} TL</strong></div>                                          
                    </div>
                    
                    <div className="offerPercentage">
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
                                    <div className='checkBoxGroup' role="group" aria-labelledby="checkbox-group">
                                        <label className="offer offerTwelvePercentage">
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

                                        <label className="offer offerThirtyPercentage">
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
                                                        
                                        <label className="offer offerFourtyPercentage">
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

                                    <div className="popupSubmitButton">
                                        <button>Teklif Ver</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                }
                <div>sdakdmasşldk</div> 
            </Modal>
    </>
  )
}

export default GetOfferButton
