import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Modal from "react-modal";
import { Formik, Field, Form} from 'formik';

import Navbar from '../components/Navbar/Navbar';
import { useAuth } from '../context/AuthContext';
import { getProductDetail } from '../services/productsService';
import { baseURL } from '../constants/axios';


Modal.setAppElement("#root");

function ProductDetail() {    
  const {loggenIn} = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  
  const [checked, setChecked] = useState({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false});
  
  useEffect(() => {    
    getProduct();
  }, [])


  const getProduct = async () => {
    const res = await getProductDetail(id);
    setProduct(res);
  } 


  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const toggleModalBuy = () => {
    setIsOpenBuy(!isOpenBuy)
  }


  const onlyOne = (checkbox) => {
    var checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

console.log(isOpen);

  return (
    <div className='ProductDetailPage'>

       <div className="navbar">
            <Navbar loggenIn={loggenIn}/>
       </div>

       <div className="container">
            <div className="productLargeImage">
               <img src={baseURL + product.image?.url} alt="" />
            </div>
            <div className="productDetails">
                <div className="name">
                    <p>{product.name}</p>
                </div>

                <div className="features">
                    <div className="ProductBrand">
                        <div className='featureName'><strong>Marka:</strong></div>
                        <span>{product.brand}</span>                        
                    </div>
                    <div className="productColor">
                        <div className='featureName'><strong>Renk:</strong></div>
                        <span>{product.color}</span>
                    </div>
                    <div className="productCondition">
                        <div className='featureName'><strong>Kullanım Durumu:</strong></div>
                        <span>{product.status}</span>
                    </div>
                </div>

                <div className="productPrice">
                    <h1>{product.price} TL</h1>
                </div>

                <div className="buttons detailButtons">                        
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


                    {
                        product.isOfferable 
                        ?
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
                                        handleChange={(e) => {
                                            console.log(e);
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
                                                                onClick={() => setChecked({'TwelvePercentage' : true})}/>

                                                            <span>%20'si kadar teklif ver</span>
                                                        </label>

                                                        <label className="offer offerThirtyPercentage">
                                                            <input 
                                                                type="checkbox" 
                                                                name="checked" 
                                                                value="30%" 
                                                                checked={checked.ThirtyPercentage}
                                                                onChange={handleChange}
                                                                onClick={() => setChecked({'ThirtyPercentage' : true})}/>

                                                            <span>%30'u Kadar Teklif Ver</span>
                                                        </label>

                                                        <label className="offer offerFourtyPercentage">
                                                            <input 
                                                                type="checkbox" 
                                                                name="checked" 
                                                                value="40%" 
                                                                checked={checked.FourtyPercentage}
                                                                onChange={handleChange}
                                                                onClick={() => setChecked({'FourtyPercentage' : true})}/>

                                                            <span>%40'ı Kadar Teklif Ver</span>
                                                        </label>

                                                        <label htmlFor="offer offerByNumber">
                                                            <input 
                                                                type="number" 
                                                                name='OfferPrice'
                                                                onChange={handleChange}
                                                                placeholder="Lütfen Teklif Giriniz"
                                                                onClick={() => setChecked({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false})}/>
                                                                
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
                            </Modal>
                        </> 
                        
                        
                      : <span></span>
                    }
                </div>

                <div className="description">
                    <p><strong>Açıklama</strong></p>
                    <p>{product.description}</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default ProductDetail