import React, { useContext, useState, useEffect } from "react";
import axios, {URL} from "../constants/axios";
import  SuccessPopUp  from '../utils/PopUpFunctions/successPopup'

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {    
  const [userMe] = useState(JSON.parse(localStorage.getItem('userMeInformation')));
  const [token] = useState(document.cookie.split("=")[1]);
  const [image, setImage] = useState();
  const [offered, setOffered] = useState(sessionStorage.getItem('offered') || false);
  
    
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
            setOffered(res.data)
            sessionStorage.setItem(productID, JSON.stringify(res.data));
            setOffered(true);
            sessionStorage.setItem('offered', true);
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
        SuccessPopUp('Teklif geri çekildi');
        sessionStorage.removeItem(productID);
        sessionStorage.removeItem(`offer ${productID}`)
        sessionStorage.removeItem('offered')
        setOffered(false);        

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

  const offerChoice = (offerID, choice) => {
    axios
      .put(URL.offers + '/' + offerID,{
        isStatus: choice
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }        
      })
      .then((response) => {
        console.log("teklif", choice);
        console.log(response.data)
      })
  }

  const imageFile =  (file) => {
    const imgFile = file;
    setImage(imgFile);
    console.log(imgFile);
  }

  const AddProduct = (values) => {

    const formData = new FormData();

    formData.append('files.image', image);
    formData.append('data', JSON.stringify(values));

   
    /* for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    } */
    
    axios
      .post(URL.products, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      .then((res) => {
        console.log(res.data);
        console.log('ürün basariyla eklendi');
      })
      .catch((err) => {
        console.log(err);
        console.log('hata')
      })
  }



  return (
    <ProductContext.Provider
      value={{
        offered,
        image,
        token,  
        getOffer,        
        deleteProductOffer,
        getBuyProduct,
        offerChoice,
        imageFile,  
        AddProduct,    
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