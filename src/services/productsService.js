import axios, { URL, baseURL } from "../constants/axios";

export const getAllProduct = async () => {
    try {
      const PRODUCTS = JSON.parse(localStorage.getItem('products'));

      if (PRODUCTS) {
        return PRODUCTS
      } else {
        const res = await axios.get(URL.products ); /* + '?_limit=5 */
  
        if(res.statusText === 'OK') {
          localStorage.setItem('products', JSON.stringify(res.data))                  
          return res.data;
                  
        }
        else {
          return {
            error: 'Data gelmedi'
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
}

export const getAllCategory = async () => {
  try {
    const res = await axios.get(URL.categories); 

    if(res.statusText === 'OK') {
                
      return res.data;
              
    }
    else {
      return {
        error: 'Category error'
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export const getProductDetail = async (id) => {
  try {
    const res = await axios.get(URL.products + '/' + id ); 

    if(res.statusText === 'OK') {
                
      return res.data;
              
    }
    else {
      return {
        error: 'Category error'
      }
    }
  } catch (error) {
    console.log(error);
  }
}