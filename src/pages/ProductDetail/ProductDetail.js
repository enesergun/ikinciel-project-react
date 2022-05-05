import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import useWindowSize from "../../hooks/useWindowSize";

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
  const [width] = useWindowSize(400, 600);
  const [product, setProduct] = useState([]);

  const [offer, setOffer] = useState(JSON.parse(sessionStorage.getItem(id)));  
  
  useEffect(() => {    
    getProduct(); 
  }, []);
/* 
  useEffect(() => {
    setOffer(JSON.parse(sessionStorage.getItem(id)))      
  }) */

      
  const getProduct = async () => {
    const res = await getProductDetail(id);
    setProduct(res);    
  } 
 
  const handleDeleteOffer = async () => {    
    const res = await deleteProductOffer(offer.id, product.id);    
  }

  return (
    <div className={styles.ProductDetailPage}>

       <div className={styles.navbar}>
            <Navbar loggenIn={loggenIn}/>
       </div>

       <div className={styles.container}>
            {
              width > 375
              ?
              <div className={styles.productLargeImage}>
               <img src={baseURL + product.image?.url} alt="" />
              </div>
            : 
            <div className={styles.productLargeImage}>
              <img src={baseURL + product.image?.formats.medium?.url} alt="" />
            </div>
            }

            <div className={styles.productDetails}>
                <ProductInfo                                         
                    product={product}
                    offer={offer}
                />   
                <div className={`${styles.buttons} ${styles.detailButtons}`}>
                   {
                       product.isSold 
                       ? <div>Bu ürün satışta değil</div>
                       : 
                       <>
                        <BuyProduct                             
                            id={id}
                        />                    
                        {
                           offer
                           ? <><CancelOffer handleDeleteOffer={handleDeleteOffer}/></>
                           : 
                           <>
                            {
                               product.isOfferable 
                               ?
                               <>
                                   <GetOfferButton                                                                               
                                       product={product}                                                                             
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