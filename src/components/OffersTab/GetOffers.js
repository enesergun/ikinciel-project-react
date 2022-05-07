import React, { useEffect, useState } from 'react'

import styles from './Offers.module.css'
import { giveOffer } from "../../services/productsService";

import useWindowSize from "../../hooks/useWindowSize";

import notProductImage from "../../assets/notProductImage.png";
import { baseURL } from '../../constants/axios';
import OfferInformation from '../OfferInformation/OfferInformation';
import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';


const GetOffers = () => {
  const [width] = useWindowSize(400, 600);
  const {userMe} = useAuth();
  const {offerChoice} = useProduct();
  const [product, setProduct] = useState([]);
  const [click, setClick] = useState('');  


  useEffect(() => {
    handleGiveOffers();  
  }, [])
  

  const handleGiveOffers = async () => {
    const res = await giveOffer(userMe.id);  
    
    const haveOfferRes = res.filter(product => product.offers.length > 0);    
    setProduct(haveOfferRes);

  }

  const handleOfferAction = (offerID, choice, index, key) => {
    const res = offerChoice(offerID, choice);
        
    if (choice === true) {
      setClick(true);
    } else if (choice === false) {
      setClick(false);
    } else {
      setClick('');
    }    
    /* setProduct(product[index].offers[key].isStatus = choice); */

  }


  

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
                    <button className={styles.rejectButton} onClick={() => {handleOfferAction(offer.id, false, index, key); setClick('tiklandi')}}>Reddet</button>
                  </>
                }                   
                </div>            
                
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