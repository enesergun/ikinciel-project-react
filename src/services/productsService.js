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

export const gaveOffer = async (id, token) => {
  try {
    const res = await axios.get(URL.offers + '?users_permissions_user=' + id, {
      headers: {
        Authorization: `Bearer ${token}`
    }
    }); 

    if(res.statusText === 'OK') {
                
      return res.data;
              
    }
    else {
      return {
        error: 'Offer error'
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export const giveOffer = async (id) => {
  try {
    const res = await axios.get(URL.products + '?users_permissions_user=' + id) 

    if(res.statusText === 'OK') {
                
      return res.data;
              
    }
    else {
      return {
        error: 'Offer error'
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export const Options = async (option) => {
  try {
    const res = await axios.get(baseURL + '/' +  option) 

    if(res.statusText === 'OK') {
                
      return res.data;
              
    }
    else {
      return {
        error: 'Offer error'
      }
    }
  } catch (error) {
    console.log(error);
  }
}

