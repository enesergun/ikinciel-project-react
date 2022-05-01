import React, { useContext, useState, useEffect } from "react";
import axios, {URL} from "../constants/axios";
import  SuccessPopUp  from '../utils/successPopup'

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {    
  const [userMe] = useState(JSON.parse(localStorage.getItem('userMeInformation')));
  const [token] = useState(document.cookie.split("=")[1]);
  const [productOffer, setProductOffer] = useState({});
  const [myOffers, setMyOffers] = useState([]);

  
  const getOffer = (offer, productID) => {
      axios
        .post(URL.offers,{
            product: productID,
            offerPrice: offer,
            users_permissions_user: userMe.id 
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {            
            localStorage.setItem(productID, JSON.stringify(res.data))
            }
        )
        SuccessPopUp('Teklif verildi');        
  }

  

  return (
    <ProductContext.Provider
      value={{
        getOffer        
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  return useContext(ProductContext);
}

export {ProductProvider, ProductContext, useProduct}