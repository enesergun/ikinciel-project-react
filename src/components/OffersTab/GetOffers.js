import React, { useEffect, useState } from 'react'

import styles from './Offers.module.css'
import { giveOffer } from "../../services/productsService";

import useWindowSize from "../../hooks/useWindowSize";

import notProductImage from "../../assets/notProductImage.png";
import { baseURL } from '../../constants/axios';
import OfferInformation from '../OfferInformation/OfferInformation';
import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';

import { ToastContainer } from 'react-toastify';


const GetOffers = () => {
  const [width] = useWindowSize(400, 600);
  const {userMe} = useAuth();
  const {offerChoice} = useProduct();
  const [product, setProduct] = useState([]);
  const [click, setClick] = useState(''); 
  const [token, setToken] = useState(() => document.cookie.split("=")[1]);

  


  useEffect(() => {
    handleGiveOffers();  
  }, [])
  

  const handleGiveOffers = async () => {
    const res = await giveOffer(userMe.id);  
    
    const haveOfferRes = res.filter(product => product.offers.length > 0);    
    setProduct(haveOfferRes);
    sessionStorage.setItem('offers', JSON.stringify(haveOfferRes));

  }

  const handleOfferAction = (offerID, choice, index, key) => {
    const res = offerChoice(offerID, choice, token);
        
    /* setChoiceClick('tiklandi'); */
    /* setProduct(product[index].offers[key].isStatus = choice); */

  }


  console.log('render edildi');

  

  return (
    <div className={styles.Offers}>
      {
        product?.map((item, index) => (
          item.offers.map((offer, key) => (
            <div className={styles.ProductCard} key={key}>
            <div className={styles.ProductCardWrapper}>
              <div className={styles.ProductFeatures}>
                <div className={styles.productImage}>
                  <img src={item.image?.formats.thumbnail.url ? `${baseURL}${item.image?.formats.thumbnail.url}` : notProductImage } alt="" />
                </div>

                <div className={styles.productInfo}>
                  <div className={styles.productName}>{item.name}</div>

                  <OfferInformation text={"Alınan Teklif"} offerPrice={offer.offerPrice}/>
                  
                </div> 
              </div>

              <div className={styles.buttons}> 
                <div className={styles.ButtonsWrapper}>
                {
                  offer.isStatus === true 
                  ? <span className={`${styles.status} ${styles.accepted}`}>Onaylandı</span>
                  : offer.isStatus === false
                  ? <span className={`${styles.status} ${styles.rejected}`}>Reddedildi</span>
                  : 
                  <>  
                    <button className={styles.acceptButton} onClick={() => {handleOfferAction(offer.id, true, index, key); setClick('tiklandi')}}>Onayla</button>
                    <button className={styles.rejectButton} onClick={() => {handleOfferAction(offer.id, false, index, key)}}>Reddet</button>
                  </>
                }                   
                </div>            
                
              </div> 
            </div>
          </div>
          ))

        ))
      }     
      <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/> 
    </div>
  )
}

export default GetOffers

/*  */