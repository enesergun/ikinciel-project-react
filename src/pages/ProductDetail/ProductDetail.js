import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import ProductInfo from '../../components/ProductDetail/ProductInfo';
import BuyProduct from '../../components/ButtonGroup/BuyProduct';

import { useAuth } from '../../context/AuthContext';
import { getProductDetail } from '../../services/productsService';
import { baseURL } from '../../constants/axios';
import GetOfferButton from '../../components/ButtonGroup/GetOfferButton';


function ProductDetail() {    
  const {loggenIn} = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [checked] = useState({'TwelvePercentage' : false, 'ThirtyPercentage': false, 'FourtyPercentage' : false});
  
  useEffect(() => {    
    getProduct();
  }, [])


  const getProduct = async () => {
    const res = await getProductDetail(id);
    setProduct(res);
  } 

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const toggleModalBuy = () => {
    setIsOpenBuy(!isOpenBuy)
  }

  return (
    <div className='ProductDetailPage'>

       <div className="navbar">
            <Navbar loggenIn={loggenIn}/>
       </div>

       <div className="container">
            <div className="productLargeImage">
               <img src={baseURL + product.image?.url} alt="" />
            </div>

            <div className="productDetails">
                <ProductInfo 
                    productName={product.name}                     
                    product={product}
                    />                

                <div className="buttons detailButtons">
                   {
                       product.isSold 
                       ? <div>Bu ürün satışta değil</div>
                       : 
                       <>
                        <BuyProduct 
                            toggleModalBuy={toggleModalBuy} 
                            isOpenBuy={isOpenBuy} 
                            loggenIn={loggenIn}
                        />                    
                        {
                            product.isOfferable 
                            ?
                            <>
                                <GetOfferButton 
                                    toggleModal={toggleModal} 
                                    isOpen={isOpen} 
                                    product={product}
                                    checked={checked}
                                    loggenIn={loggenIn}
                                />                                
                            </>                                                         
                          : <span></span>
                        }
                        </> 
                   }
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