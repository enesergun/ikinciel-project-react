import {useState, useEffect} from 'react'

import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';

import useWindowSize from "../../hooks/useWindowSize";

import NotFound from '../NotFound/NotFound';

import Navbar from '../../components/Navbar/Navbar';
import ProductInfo from '../../components/ProductDetail/ProductInfo';
import BuyProduct from '../../components/ButtonGroup/BuyProduct';
import CancelOffer from '../../components/ButtonGroup/CancelOffer';
import GetOfferButton from '../../components/ButtonGroup/GetOfferButton';

import {useParams} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from "../style/ProductDetail.module.css";
import { getProductDetail } from '../../services/productsService';
import { baseURL } from '../../constants/axios';
import NotAvailableProduct from '../../components/NotAvailableProduct/NotAvailableProduct';


function ProductDetail() {    
  const {loggenIn} = useAuth();
  const {deleteProductOffer, offered, isOfferExist, isProductSold, ProductSold} = useProduct();
  const [token] = useState(() => document.cookie.split("=")[1]);
  const { id } = useParams();
    
  const [width] = useWindowSize(400, 600);
  const [product, setProduct] = useState([]);

  const [isSold, setIsSold] = useState(false);
  const [offer, setOffer] = useState(JSON.parse(sessionStorage.getItem(id)));  
  
  useEffect(() => {    
    getProduct();
    
  }, []);

  useEffect(() => {
    setOffer(JSON.parse(sessionStorage.getItem(id)));
    
  
  }, [offered])

  useEffect(() => {
    setIsSold(isProductSold(id));
      
  }, [ProductSold])
  

  console.log(isOfferExist(id));
       
  const getProduct = async () => {
    const res = await getProductDetail(id);
    setProduct(res);
    
  } 
 
  const handleDeleteOffer = async () => {    
    const res = await deleteProductOffer(offer.id, product.id, token);    
  }
  
  return (
    <> 

     {product.error 
     ? 
     <div>
       <NotFound /> 
      </div> 
     : 
     <>
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
                      ? <NotAvailableProduct />
                      : 
                      <>
                        {
                        isProductSold(id)
                        ? <NotAvailableProduct />
                        : 
                        <>
                          <BuyProduct                             
                            id={id}
                            token={token}
                          />                    
                        {
                            isOfferExist(id)
                            ? <><CancelOffer handleDeleteOffer={handleDeleteOffer}/></>
                            : 
                            <>
                            {
                                product.isOfferable 
                                ?
                                <>
                                    <GetOfferButton                                                                               
                                        product={product}  
                                        token={token}                                                                           
                                    />                                
                                </>                                                         
                              : <span></span>
                            }
                            </>
                        }
                        </> 
                    }
                      </>
                    }
                </div>

                <div className={styles.description}>
                    <p><strong>A????klama</strong></p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
        <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/>
        </div>
     </>
     }

    </>
    
  )
}

export default ProductDetail


