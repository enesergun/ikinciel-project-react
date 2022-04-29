import {useState, useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import {useParams} from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import { getProductDetail } from '../services/productsService';
import { baseURL } from '../constants/axios';

/* import '../../node_modules/uikit/dist/css/uikit.css';
import '../../node_modules/uikit/dist/js/uikit' */

function ProductDetail() {    
  const {loggenIn} = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState([])
  
  useEffect(() => {    
    getProduct();
  }, [])

  const getProduct = async () => {
    const res = await getProductDetail(id);
    setProduct(res);
  } 

  console.log(product.name);

  /* console.log(product.image.formats.medium.url); */

  return (
    <div className='ProductDetailPage'>

       <div className="navbar">
            <Navbar loggenIn={loggenIn}/>
       </div>

       <div className="container">
            <div className="productLargeImage">
                {/* <img src={baseURL + product.image.url} alt="" /> */}
            </div>
            <div className="productDetails">
                <div className="name">
                    <p>{product.name}</p>
                </div>

                <div className="features">
                    <div className="ProductBrand">
                        <div className='featureName'><strong>Marka:</strong></div>
                        <span>{product.brand}</span>                        
                    </div>
                    <div className="productColor">
                        <div className='featureName'><strong>Renk:</strong></div>
                        <span>{product.color}</span>
                    </div>
                    <div className="productCondition">
                        <div className='featureName'><strong>Kullanım Durumu:</strong></div>
                        <span>{product.status}</span>
                    </div>
                </div>

                <div className="productPrice">
                    <h1>{product.price} TL</h1>
                </div>

                <div className="buttons detailButtons">                        
                    <button className='buyButton'>Satın Al</button>

                    <button className='offerButton'>Teklif Ver</button>
                </div>

                <div className="description">
                    <p><strong>Açıklama</strong></p>
                    <p>{product.description}</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default ProductDetail