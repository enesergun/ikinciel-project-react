import axios, { URL, baseURL } from "../constants/axios";

export const getAllProduct = async (start) => {
    try {     
        const res = await axios.get(URL.products + '?_start=' +  start * 10 + '&_limit=10' ); /* + '?_limit=5 */
  
        if(res.statusText === 'OK') {                         
          return res.data;
                  
        }
        else {
          return {
            error: 'Data error'
          }
        }
      /* } */
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