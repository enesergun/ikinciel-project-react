import React, { useEffect, useState } from 'react'

import styles from './Offers.module.css'

import notProductImage from "../../assets/notProductImage.png";
import { gaveOffer } from "../../services/productsService";

import { useAuth } from '../../context/AuthContext';

import { baseURL } from '../../constants/axios';
import OfferInformation from '../OfferInformation/OfferInformation';
import BuyProduct from '../ButtonGroup/BuyProduct';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GiveOffers = () => {
  const {token, userMe} = useAuth();
  const [offers, setOffers] = useState([]);
  /* const [status, setStatus] = useState(true); */
  

  useEffect(() => {
    handleGaveOffers();  
  }, [])
  

  const handleGaveOffers = async () => {
    const res = await gaveOffer(userMe.id, token);  
    setOffers(res)  
  }
  
  console.log(offers)
  
  return (
    <div className={styles.Offers}>
      {
        offers?.map((offer, index) => (
          <div className={styles.ProductCard} key={index}>
            <div className={styles.ProductCardWrapper}>
              <div className={styles.ProductFeatures}>
                <div className={styles.productImage}>
                  <img src={offer.product.image?.formats.thumbnail.url.length > 0 ? `${baseURL}${offer.product.image?.formats.thumbnail.url}` : notProductImage } alt="" />
                </div>

                <div className={styles.productInfo}>
                  <div className={styles.productName}>{offer.product?.name}</div>

                  <OfferInformation text={"Verilen Teklif"} offerPrice={offer.offerPrice}/>
                  
                </div> 
              </div>

              <div className={styles.buttons}>
                {
                  offers.status === true 
                  ? 
                  <>
                    <BuyProduct id={offer.product.id} stylesProp={"acceptButton"}/>
                    <span className={`${styles.status} ${styles.accepted}`}>Onaylandı</span>
                  </>
                  : offers.status === false 
                  ? 
                  <>
                    <span className={`${styles.status} ${styles.rejected}`}>Reddedildi</span>
                  </>
                  : <span className={`${styles.status} ${styles.wait}`}>Bekliyor</span>
                }
                
                
              </div> 
            </div>
          </div>

        ))
      }  
      <ToastContainer hideProgressBar={true} className='toastContainer' toastClassName='darkToast'/>   
    </div>
  )
}

export default GiveOffers

/*  */