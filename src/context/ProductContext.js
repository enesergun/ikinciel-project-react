import React, { useContext, useState, useEffect } from "react";
import axios, {URL} from "../constants/axios";
import  SuccessPopUp  from '../utils/PopUpFunctions/successPopup'

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
        SuccessPopUp('Teklif geri çekildi');
      })
  }

  const getBuyProduct = (productID) => {
    axios
      .put(URL.products + '/' + productID, {
      isOfferable: false,
      isSold: true
    },{
      headers: {
        Authorization: `Bearer ${token}`
    }
    })
    .then((res) => {
      console.log("Ürün satın alındı");
      SuccessPopUp('Ürün satın alındı')
    })
    .catch((error) => {
      console.log('satın alma işlemi gerçekleştirilemedi')
    })

  }



  return (
    <ProductContext.Provider
      value={{        
        getOffer,        
        deleteProductOffer,
        getBuyProduct,
        token
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