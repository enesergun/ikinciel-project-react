import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

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
    <div className="product" key={index}>
      <LinkStyled>
        <Link to={`productdetail/${productID}`}>
          <div className="productImage">
              <img src={image} alt="" />
          </div>        

          <div className="productFeatures">
              <div className="brandName">{brand}</div>
              <div className="productColor"><strong>Renk</strong>: {productColor}</div>
          </div>

          <div className="productPrice">{productPrice} TL</div>
        </Link>
      </LinkStyled>
    </div>
  )
}

export default ProductCard