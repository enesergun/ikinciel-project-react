import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import styles from "./ProductCard.module.css";

const LinkStyled = styled.div`
  a {
    text-decoration: none;
  }
  a:clicked,
  a:visited {
    color: inherit;
  }
  .brandName {
    color: #4B9CE2;
  }
  .productColor {
    color: #3E3E3E;
  }
  .productPrice {
    color: #3E3E3E;
  }
`

const ProductCard = ({index, image, brand, productColor, productPrice, productID}) => {
  return (
    <div className={styles.product} key={index}>
      <LinkStyled>
        <Link to={`/productdetail/${productID}`}>
          <div className={styles.productImage}>
              <img src={image} alt="" />
          </div>        

          <div className={styles.productFeatures}>
              <div className={styles.brandName}>{brand}</div>
              <div className={styles.productColor}><strong>Renk</strong>: {productColor}</div>
          </div>

          <div className={styles.productPrice}><strong>{productPrice} TL</strong></div>
        </Link>
      </LinkStyled>
    </div>
  )
}

export default ProductCard