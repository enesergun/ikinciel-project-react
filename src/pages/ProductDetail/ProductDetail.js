import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import styles from "../style/ProductDetail.module.css";

import  errorPopup  from '../../utils/errorPopup'

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
  const {deleteProductOffer, getOffer, getBuyProduct} = useProduct();

  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [checked] = useState({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false});
  const [offer, setOffer] = useState(JSON.parse(sessionStorage.getItem(id)));  
  
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

  const handleDeleteOffer = async () => {    
    const res = await deleteProductOffer(offer.id, product.id); 
  }

  const handleOffer = (values) => {

    let offer;

    if ((values.checked.length > 0 &&  values.checked.length <= 1 && !values.OfferPrice) || (values.OfferPrice && values.checked.length === 0)) {
        if (values.checked[0] === '20') {
            offer = ((product.price / 100) * 20).toFixed(1);
            
        } else if (values.checked[0] === '30') {
            offer = ((product.price / 100) * 30).toFixed(1);

        } else if (values.checked[0] === '40') {
            offer = ((product.price / 100) * 40).toFixed(1);

        } else if (values.OfferPrice) {
            offer = values.OfferPrice;
        }
        getOffer(offer, product.id);        

    } else if ( values.checked.length >= 1 && values.OfferPrice) {
        console.log("Lütfen en fazla bir tane seçenek işaretleyin.");
        errorPopup("Lütfen en fazla bir tane seçenek işaretleyin.");
    } else {
      console.log("Lütfen en fazla bir tane seçenek işaretleyin.");
      errorPopup("Lütfen en fazla bir tane seçenek işaretleyin.");
    }       
  }

  const handleBuyProduct = async () => {
    const res = await getBuyProduct(id);
  }

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
                    offer={offer}
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
                            handleBuyProduct={handleBuyProduct}
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
                                       toggleModal={toggleModal} 
                                       isOpen={isOpen} 
                                       product={product}
                                       checked={checked}
                                       loggenIn={loggenIn}
                                       handleOffer={handleOffer}
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