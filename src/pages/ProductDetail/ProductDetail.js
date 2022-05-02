import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import styles from "../style/ProductDetail.module.css";

import Navbar from '../../components/Navbar/Navbar';
import ProductInfo from '../../components/ProductDetail/ProductInfo';
import BuyProduct from '../../components/ButtonGroup/BuyProduct';
import CancelOffer from '../../components/ButtonGroup/CancelOffer';


import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';

import { getProductDetail } from '../../services/productsService';
import { baseURL } from '../../constants/axios';
import GetOfferButton from '../../components/ButtonGroup/GetOfferButton';


function ProductDetail() {    
  const {loggenIn} = useAuth();
  const { id } = useParams();
  const {deleteProductOffer} = useProduct();

  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [checked] = useState({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false});
  const [isOffer, setIsOffer] = useState()

  useEffect(() => {    
    getProduct();       
  }, [])

  useEffect(() => {
    setIsOffer(JSON.parse(sessionStorage.getItem(product.id)))  
  }, [isOpen])
  
    
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

  const handleDeleteOffer = async () => {
    /* console.log(isOffer.id); */
    const res = await deleteProductOffer(isOffer.id, product.id);
    
  }

  /* const checkOffer = () => {
    
    if (!isOpen) {
      console.log("modal false");
      setIsOffer(JSON.parse(sessionStorage.getItem(product.id)));
    }
      
  } */    

  return (
    <div className={styles.ProductDetailPage}>

       <div className={styles.navbar}>
            <Navbar loggenIn={loggenIn}/>
       </div>

       <div className={styles.container}>
            <div className={styles.productLargeImage}>
               <img src={baseURL + product.image?.url} alt="" />
            </div>

            <div className={styles.productDetails}>
                <ProductInfo 
                                        
                    product={product}
                    offer={isOffer}
                /> 

                <div className={`${styles.buttons} ${styles.detailButtons}`}>
                   {
                       product.isSold 
                       ? <div>Bu ürün satışta değil</div>
                       : 
                       <>
                        <BuyProduct 
                            toggleModalBuy={toggleModalBuy} 
                            isOpenBuy={isOpenBuy} 
                            loggenIn={loggenIn}
                        />                    
                        {
                           isOffer
                           ? <><CancelOffer handleDeleteOffer={handleDeleteOffer}/></>
                           : 
                           <>
                            {
                               product.isOfferable 
                               ?
                               <>
                                   <GetOfferButton 
                                       toggleModal={toggleModal} 
                                       isOpen={isOpen} 
                                       product={product}
                                       checked={checked}
                                       loggenIn={loggenIn}
                                   />                                
                               </>                                                         
                             : <span></span>
                            }
                           </>
                        }
                        </> 
                   }
                </div>

                <div className={styles.description}>
                    <p><strong>Açıklama</strong></p>
                    <p>{product.description}</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default ProductDetail