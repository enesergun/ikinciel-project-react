import React, { useContext, useState, useEffect } from "react";
import axios, {URL} from "../constants/axios";
import ErrorPopUp from "../utils/PopUpFunctions/errorPopup";
import  SuccessPopUp  from '../utils/PopUpFunctions/successPopup'

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {    
  const [userMe] = useState(JSON.parse(localStorage.getItem('userMeInformation')));

  const [image, setImage] = useState();
  const [offered, setOffered] = useState(sessionStorage.getItem('offered') || false);
  const [ProductSold, setProductSold] = useState();
  
  

  const isOfferStatus = (choice) => {
  
  }


  const isProductSold = (productID) => {
    const product = JSON.parse(sessionStorage.getItem(`isSold ${productID}`));

    if (product) {
      return true
      
    } else {

      return false
    }

  }

  const isOfferExist = (productID) => {
    const offer = JSON.parse(sessionStorage.getItem(productID));

    if (offer) {
      return true;

    } else {
      return false;

    }
  }
  
    
  const getOffer = (offer, productID, token) => {
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
            setTimeout(() => {
              SuccessPopUp('Teklif verildi');
            }, 100);
            setOffered(res.data)
            sessionStorage.setItem(productID, JSON.stringify(res.data));
            setOffered(true);
            sessionStorage.setItem('offered', true);
            console.log("teklif verildi")
            }
        )
        .catch((error) => {
            console.log(error);
            setTimeout(() => {
              ErrorPopUp('Bir sebepten ötürü teklif verilemedi, ama ne inan bilmiyorum. Tekrar deneyiniz.');
            }, 100);
        })
  }

  const deleteProductOffer = (offerID, productID, token) =>{  
    axios
      .delete(URL.offers + '/' + offerID, {
        headers: {
          Authorization: `Bearer ${token}`
      }
      })
      .then((response) =>{
        setTimeout(() => {
          SuccessPopUp('Teklif geri çekildi');
        }, 100);
        sessionStorage.removeItem(productID);
        sessionStorage.removeItem(`offer ${productID}`)
        sessionStorage.removeItem('offered')
        setOffered(false);        
        console.log("teklif silindi")

      })
      .catch((error) => {
        setTimeout(() => {
          ErrorPopUp('Bir sebepten ötürü teklif geri çekilemedi, ama ne inan bilmiyorum. Tekrar deneyiniz.');
        }, 100);
      })
  }

  const getBuyProduct = (productID, token) => {
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
      setTimeout(() => {
        SuccessPopUp('Ürün satıldı');
        console.log("Ürün satın alındı");
      }, 100);      
      sessionStorage.setItem(`isSold ${productID}`, true);      
      setProductSold('sold');
      
    })
    .catch((error) => {
      
      setTimeout(() => {
        ErrorPopUp('Bir sebepten ötürü ürün alınamadı, ama ne inan bilmiyorum. Tekrar deneyiniz.');
        console.log("token", token);
      }, 100);
    })

  }

  const offerChoice = (offerID, choice, token) => {
    axios
      .put(URL.offers + '/' + offerID,{
        isStatus: choice
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }        
      })
      .then((response) => {
        setTimeout(() => {
          SuccessPopUp(choice ? `Teklif Başarıyla Onaylandı`: 'Teklif Başarıyla Reddedildi.');
        }, 100);
        isOfferStatus(choice);
        console.log("teklif", choice);
        console.log(response.data)
      })
  }

  const imageFile =  (file) => {
    const imgFile = file;
    setImage(imgFile);
    console.log(imgFile);
  }

  const AddProduct = (values, token) => {

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
        SuccessPopUp('Ürün Başarıyla Eklendi.')
      })
      .catch((err) => {
        ErrorPopUp('Bir sebepten ötürü ürün yüklenemedi. Lütfen tekrar deneyiniz.');
      })
  }



  return (
    <ProductContext.Provider
      value={{
        
        offered,
        image,      
        ProductSold,
        getOffer,        
        deleteProductOffer,
        getBuyProduct,
        offerChoice,
        imageFile,  
        AddProduct,    
        isOfferExist,
        isProductSold
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