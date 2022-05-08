import React from 'react';

import { useProduct } from '../../context/ProductContext';

import styles from "./ProductInfo.module.css";

import {useParams} from 'react-router-dom';

import useWindowSize from "../../hooks/useWindowSize";

import OfferInformation from '../OfferInformation/OfferInformation';



const ProductInfo = ({product, offer}) => {
    const {userMe, offered, isOfferExist} = useProduct();
    const { id } = useParams();
    const [width] = useWindowSize(400, 600);

    
  return (
    <>         
        {
            width > 375 
            ?
            <>
                <div className={styles.name}>
                    <p>{product.name}</p>
                </div>

                <div className={styles.features}>
                    <div className={styles.ProductBrand}>
                        <div className={styles.featureName}><strong>Marka:</strong></div>
                            <span>{product.brand}</span>                        
                    </div>
                    <div className={styles.productColor}>
                        <div className={styles.featureName}><strong>Renk:</strong></div>
                        <span>{product.color}</span>
                    </div>
                    <div className={styles.productCondition}>
                        <div className={styles.featureName}><strong>Kullanım Durumu:</strong></div>
                        <span>{product.status}</span>
                    </div>
                </div>

                <div className={styles.productPrice}>
                    <h1>{product.price} TL</h1>
                </div>

                <div className={styles.gotOfferPrice}>
                    {
                        isOfferExist(id) 
                        ? 
                        <OfferInformation text={"Verilen Teklif"} offerPrice={offer?.offerPrice}/>
                        : <span></span>
                    }
                        
                </div>
            </>
        : 
        <>
            <div className={styles.name}>
                <p>{product.name}</p>
            </div>

            <div className={styles.productPrice}>
                <span className={styles.price}>{product.price} TL</span>
                <div className={styles.gotOfferPriceProductDetail}>
                    {
                        offer
                        ? 
                        <OfferInformation text={"Verilen Teklif"} offerPrice={offer.offerPrice} customStyles={'productDetail'}/>
                        : <span></span>
                    }
                        
                </div>
            </div>            

            <div className={styles.features}>
                <div className={styles.ProductBrand}>
                    <div className={styles.featureName}><strong>Marka:</strong></div>
                        <span>{product.brand}</span>                        
                </div>
                <div className={styles.productColor}>
                    <div className={styles.featureName}><strong>Renk:</strong></div>
                    <span>{product.color}</span>
                </div>
                <div className={styles.productCondition}>
                    <div className={styles.featureName}><strong>Kullanım Durumu:</strong></div>
                    <span>{product.status}</span>
                </div>
            </div>
        </>
        }
    </>
  )
}

export default ProductInfo;
