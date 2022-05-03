import React, { useEffect, useState } from 'react'

import styles from './Offers.module.css'

import notProductImage from "../../assets/notProductImage.png";
import { gaveOffer } from "../../services/productsService";

import { useAuth } from '../../context/AuthContext';

import { baseURL } from '../../constants/axios';
import OfferInformation from '../OfferInformation/OfferInformation';

const GiveOffers = () => {
  const {token} = useAuth();
  const [offers, setOffers] = useState([]);
  const [status, setStatus] = useState();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('userMeInformation')));


  useEffect(() => {
    handleGaveOffers();  
  }, [])
  

  const handleGaveOffers = async () => {
    const res = await gaveOffer(user.id, token);  
    setOffers(res)  
  }
  
  
  return (
    <div className={styles.Offers}>
      {
        offers?.map((offer, index) => (
          <div className={styles.ProductCard}>
            <div className={styles.ProductCardWrapper}>
              <div className={styles.ProductFeatures}>
                <div className={styles.productImage}>
                  <img src={offer.product.image?.formats.thumbnail.url ? `${baseURL}${offer.product.image?.formats.thumbnail.url}` : notProductImage } alt="" />
                </div>

                <div className={styles.productInfo}>
                  <div className={styles.productName}>{offer.product.name}</div>

                  <OfferInformation text={"Verilen Teklif"} offerPrice={offer.offerPrice}/>
                  
                </div> 
              </div>

              <div className={styles.buttons}>
                {
                  offer.status === true 
                  ? 
                  <>
                    <button className={styles.acceptButton}>Satın Al</button>
                    <span className={`${styles.status} ${styles.accepted}`}>Onaylandı</span>
                  </>
                  : offer.status === false 
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
    </div>
  )
}

export default GiveOffers

/*  */