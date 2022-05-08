import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import styles from "./ProductCard.module.css";

import { baseURL } from "../../constants/axios";

import notProductImage from "../../assets/notProductImage.png";

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

const ProductCard = ({ product,index, /* image, brand, productColor, productPrice, productID */}) => {
  return (
    <div className={styles.product} key={index}>
      <LinkStyled>
        <Link to={`/productdetail/${product.id}`}>
          <div className={styles.productImage}>
              <img src={product.image?.url ? baseURL + product.image?.url : notProductImage} alt="" />
          </div>        

          <div className={styles.productFeatures}>
              <div className={styles.brandName}>{product.brand}</div>
              <div className={styles.productColor}><strong>Renk</strong>: {product.productColor}</div>
          </div>

          <div className={styles.productPrice}><strong>{product.productPrice} TL</strong></div>
        </Link>
      </LinkStyled>
    </div>
  )
}

export default ProductCard