import {useState, useEffect} from 'react'
import brandLogoIndex from '../assets/brandLogoIndex.svg'
/* import addPlus from '../assets/addPlus.svg' */
import Banner from '../assets/Banner1.png';

import {getAllProduct } from '../services/productsService';
import {baseURL} from '../constants/axios'

import ProductCard from '../components/ProductCard/ProductCard'
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar';

import { useAuth } from '../context/AuthContext'


/*  */
function Index() {

  const [categories] = useState(['Hepsi', 'Pantolon', 'Gömlek', 'Tişört', 'Şort', 'Sweathirt', 'Kazak', 'Polar', 'Mont', 'Abiye', 'Ayakkabı', 'Çanta', 'Triko', 'Diğer']);
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);

  const {loggenIn} = useAuth();

  console.log(loggenIn);
  useEffect(() => {
    getData();
    /* getCategory(); */
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

/* const getCategory = async () => {
  const res = await getAllCategory();
  setCategory(res)
} */


console.log(products);
  
  return (
    <div className="indexPage">

      <div className="navbar">
        <Navbar loggenIn={loggenIn}/>
      </div>

      <div className="banner">
        <img src={Banner} alt="" />
      </div>

      <div className="categories">
        {
          categories.map((category, index) => (
            <Categories category={category} />            
          ))
        }
      </div>
      <div className="underline"></div>

      <div className="products">
        {
          products.map((product, index) => (

           <ProductCard index={index} image={baseURL + product.image.url} brand={product.brand} productColor={product.color} productPrice={product.price}/>             
          
           ))
        }                
      </div>
    </div>
  )
}

export default Index