import React, { useEffect, useState } from 'react'

import styles from './Offers.module.css'
import { giveOffer } from "../../services/productsService";

import notProductImage from "../../assets/notProductImage.png";
import { baseURL } from '../../constants/axios';
import OfferInformation from '../OfferInformation/OfferInformation';
import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';

const GetOffers = () => {
  const {userMe} = useAuth();
  const {offerChoice} = useProduct();
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    handleGiveOffers();  
  }, [])
  

  const handleGiveOffers = async () => {
    const res = await giveOffer(userMe.id);  
    
    const haveOfferRes = res.filter(product => product.offers.length > 0);

    setProduct(haveOfferRes);

  }

  const handleOfferAction = (offerID, choice) => {
    const res = offerChoice(offerID, choice);
    console.log(res)

  }


  return (
    <div className={styles.Offers}>
      {
        product?.map((item, index) => (
          item.offers.map((offer, index) => (
            <div className={styles.ProductCard} key={index}>
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
                {
                  offer.isStatus === true 
                  ? <span className={`${styles.status} ${styles.accepted}`}>Onaylandı</span>
                  : offer.isStatus === false
                  ? <span className={`${styles.status} ${styles.rejected}`}>Reddedildi</span>
                  : 
                  <>  
                    <button className={styles.acceptButton} onClick={() => handleOfferAction(offer.id, true)}>Onayla</button>
                    <button className={styles.rejectButton} onClick={() => handleOfferAction(offer.id, false)}>Reddet</button>
                  </>
                }                               
                
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