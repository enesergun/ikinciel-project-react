import {useState, useEffect} from 'react'
import brandLogoIndex from '../assets/brandLogoIndex.svg'
/* import addPlus from '../assets/addPlus.svg' */
import Banner from '../assets/Banner1.png';
import productImage from '../assets/productImage.png';
import { getAllProduct } from '../services/productsService';
import {baseURL} from '../constants/axios'


function Index() {

  const [categories] = useState(['Hepsi', 'Pantolon', 'Gömlek', 'Tişört', 'Şort', 'Sweathirt', 'Kazak', 'Polar', 'Mont', 'Abiye', 'Ayakkabı', 'Çanta', 'Triko', 'Diğer']);
  const [products, setProducts] = useState([])
  const [start, setStart] = useState(0)
    
  useEffect(() => {
    getData();
  }, []);


  
  
 /*  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;

    if (userScrollHeight >= windowBottomHeight - 1) {      
      console.log("sondayım");
      console.log("start", start );
      setStart(start + 1 );
      }
}; */

  const getData = async () => {
    const res = await getAllProduct(start);
    setProducts(res)
}


console.log(products);
  
  return (
    <div className="indexPage">

      <div className="navbar">
        <div className="navbarWrapper">
          <div className="brand">
            <img src={brandLogoIndex} alt="" />
          </div>
          <div className="buttons">
            
            <div className="addProductButton">            
              <button className='navbarButton'>Ürün Ekle</button>
            </div>

            <div className="accountButton">
              <button className='navbarButton'>Giriş Yap</button>
            </div>

          </div>
        </div>
      </div>

      <div className="banner">
        <img src={Banner} alt="" />
      </div>

      <div className="categories">
        {
          categories.map((category, index) => (
            <div className='categoryName'>{category}</div>
          ))
        }
      </div>
      <div className="underline"></div>

      <div className="products">
        {
          products.map((product, index) => (
            <div className="product" key={index}>
              <div className="productImage">
                <img src={baseURL + product.image.url} alt="" />
              </div>
              <div className="productFeatures">
                <div className="branName">{product.brand}</div>
                <div className="productColor"><strong>Renk</strong>: {product.color}</div>
              </div>
              <div className="productPrice">{product.price} TL</div>
            </div>
          ))
        }                
      </div>
    </div>
  )
}

export default Index