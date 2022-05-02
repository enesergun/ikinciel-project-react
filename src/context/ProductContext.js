import React, { useContext, useState, useEffect } from "react";
import axios, {URL} from "../constants/axios";
import  SuccessPopUp  from '../utils/successPopup'

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {    
  const [userMe] = useState(JSON.parse(localStorage.getItem('userMeInformation')));
  const [token] = useState(document.cookie.split("=")[1]);
    
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
            SuccessPopUp('Teklif verildi');
            sessionStorage.setItem(productID, JSON.stringify(res.data));
            }
        ).catch((error) => {
            console.log(error);
        })
  }

  const deleteProductOffer = (offerID, productID) =>{  
    axios
      .delete(URL.offers + '/' + offerID, {
        headers: {
          Authorization: `Bearer ${token}`
      }
      })
      .then((response) =>{
        sessionStorage.removeItem(productID);
        sessionStorage.removeItem(`offer ${productID}`)
      })
  }


  return (
    <ProductContext.Provider
      value={{
        userMe,
        getOffer,        
        deleteProductOffer,
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