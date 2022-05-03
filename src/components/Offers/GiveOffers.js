import React from 'react'

import styles from './Offers.module.css'

import product from "../../assets/product.png";

const GiveOffers = () => {
  return (
    <div className={styles.Offers}>
      <div className={styles.ProductCard}>

        <div className={styles.ProductCardWrapper}>
          <div className={styles.ProductFeatures}>
            <div className={styles.productImage}>
              <img src={product} alt="" />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productName}>Beli Uzun Trençkot Kareli</div>

              <div className={styles.gotOfferPrice}>
                <div className={styles.Offer}>Verilen teklif : <strong>112 TL </strong></div>
              </div>
            </div> 
          </div>

          <div className={styles.buttons}>
            <button className={styles.acceptButton}>Onayla</button>
            <span className={`${styles.status} ${styles.accepted}`}>Onaylandı</span>
          </div>
        </div>

      </div>
      <div className={styles.ProductCard}>

        <div className={styles.ProductCardWrapper}>
          <div className={styles.ProductFeatures}>
            <div className={styles.productImage}>
              <img src={product} alt="" />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productName}>Beli Uzun Trençkot Kareli</div>

              <div className={styles.gotOfferPrice}>
                <div className={styles.Offer}>Verilen teklif : <strong>112 TL </strong></div>
              </div>
            </div> 
          </div>

          <div className={styles.buttons}>
            <button className={styles.acceptButton}>Onayla</button>
            <span className={`${styles.status} ${styles.rejected}`}>Reddedildi</span>
          </div>
        </div>

      </div>
      <div className={styles.ProductCard}>

        <div className={styles.ProductCardWrapper}>
          <div className={styles.ProductFeatures}>
            <div className={styles.productImage}>
              <img src={product} alt="" />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productName}>Beli Uzun Trençkot Kareli</div>

              <div className={styles.gotOfferPrice}>
                <div className={styles.Offer}>Verilen teklif : <strong>112 TL </strong></div>
              </div>
            </div> 
          </div>

          <div className={styles.buttons}>
            <button className={styles.acceptButton}>Onayla</button>
            <button className={styles.rejectButton}>Reddet</button>
          </div>
        </div>

      </div>
      <div className={styles.ProductCard}>

        <div className={styles.ProductCardWrapper}>
          <div className={styles.ProductFeatures}>
            <div className={styles.productImage}>
              <img src={product} alt="" />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productName}>Beli Uzun Trençkot Kareli</div>

              <div className={styles.gotOfferPrice}>
                <div className={styles.Offer}>Verilen teklif : <strong>112 TL </strong></div>
              </div>
            </div> 
          </div>

          <div className={styles.buttons}>
            <button className={styles.acceptButton}>Onayla</button>
            <button className={styles.rejectButton}>Reddet</button>
          </div>
        </div>

      </div><div className={styles.ProductCard}>

        <div className={styles.ProductCardWrapper}>
          <div className={styles.ProductFeatures}>
            <div className={styles.productImage}>
              <img src={product} alt="" />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productName}>Beli Uzun Trençkot Kareli</div>

              <div className={styles.gotOfferPrice}>
                <div className={styles.Offer}>Verilen teklif : <strong>112 TL </strong></div>
              </div>
            </div> 
          </div>

          <div className={styles.buttons}>
            <button className={styles.acceptButton}>Onayla</button>
            <button className={styles.rejectButton}>Reddet</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GiveOffers

/*  */