import React, { useEffect, useState } from 'react'

import styles from './Offers.module.css'
import { giveOffer } from "../../services/productsService";

import notProductImage from "../../assets/notProductImage.png";
import { baseURL } from '../../constants/axios';
import OfferInformation from '../OfferInformation/OfferInformation';

const GetOffers = () => {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('userMeInformation')));

  useEffect(() => {
    handleGiveOffers();  
  }, [])
  

  const handleGiveOffers = async () => {
    const res = await giveOffer(user.id);  
    
    const haveOfferRes = res.filter(product => product.offers.length > 0);

    setProduct(haveOfferRes);

  }


  return (
    <div className={styles.Offers}>
      {
        product?.map((item, index) => (
          item.offers.map((offer, index) => (
            <div className={styles.ProductCard}>
            <div className={styles.ProductCardWrapper}>
              <div className={styles.ProductFeatures}>
                <div className={styles.productImage}>
                  <img src={item.image?.formats.thumbnail.url ? `${baseURL}${item.image?.formats.thumbnail.url}` : notProductImage } alt="" />
                </div>

                <div className={styles.productInfo}>
                  <div className={styles.productName}>{item.name}</div>

                  <OfferInformation text={"Verilen Teklif"} offerPrice={offer.offerPrice}/>
                  
                </div> 
              </div>

              <div className={styles.buttons}>                                
                <button className={styles.acceptButton}>Onayla</button>
                <button className={styles.rejectButton}>Reddet</button>
              </div> 
            </div>
          </div>
          ))

        ))
      }      
    </div>
  )
}

export default GetOffers

/*  */