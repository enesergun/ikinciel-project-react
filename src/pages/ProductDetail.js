import {useState, useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import {useParams} from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import { getProductDetail } from '../services/productsService';
import { baseURL } from '../constants/axios';

import Modal from "react-modal";

Modal.setAppElement("#root");

function ProductDetail() {    
  const {loggenIn} = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
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
                    <button className='buyButton'>Satın Al</button>

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
                                <div>My modal dialog.</div>
                                <button onClick={toggleModal}>Close modal</button>
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