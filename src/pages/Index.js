import {useState, useEffect} from 'react'

import Banner from '../assets/Banner1.png';

import {getAllProduct, getAllCategory } from '../services/productsService';
import {baseURL} from '../constants/axios';
import {Link} from 'react-router-dom';

import ProductCard from '../components/ProductCard/ProductCard'
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar';

import { useAuth } from '../context/AuthContext';



/*  */
function Index() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Hepsi')
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);
  const {loggenIn} = useAuth();

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  useEffect(() => {
    getCategoryProduct(selectedCategory)
  }, [selectedCategory])

  
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

const getCategory = async () => {
  const res = await getAllCategory();
  console.log(res);
  setCategories(res);
}

const getCategoryProduct = (category) => {
  if (category === "Hepsi") {
    getData();
  }
  categories.map((element) => {
    if (element.name === category) {
      setProducts(element.products)
    }
  })
}

console.log(selectedCategory);

  
  return (
    <div className="indexPage">

      <div className="navbar">
        <Navbar loggenIn={loggenIn}/>
      </div>

      <div className="banner">
        <img src={Banner} alt="" />
      </div>

      <div className="categories">
        <div className={selectedCategory === 'Hepsi' ? 'categoryName activeCategory' : 'categoryName'} onClick={(e) => setSelectedCategory(e.target.textContent)}>Hepsi</div>
        {
          categories.map((category, index) => (
            <div className={selectedCategory === category.name ? 'categoryName activeCategory' : 'categoryName'} onClick={(e) => setSelectedCategory(e.target.textContent)}>{category.name}</div>          
          ))
        }
        <div className={selectedCategory === 'Diğer' ? 'categoryName activeCategory' : 'categoryName'} onClick={(e) => setSelectedCategory(e.target.textContent)}>Diğer</div>
      </div>

      <div className="underline"></div>

      <div className="products">
        {
          products.length > 0 
          ?
          products.map((product, index) => (

            
              <ProductCard index={index} image={baseURL + product.image.url} brand={product.brand} productColor={product.color} productPrice={product.price} productID={product.id}/>
            
           
            )) 
          :
          <div>Seçili Kategoride Ürün Bulunmamaktadır.</div>
        }                
      </div>
    </div>
  )
}

export default Index