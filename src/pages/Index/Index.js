import {useState, useEffect} from 'react'

import Banner from '../../assets/Banner1.png';
import styles from "../style/Index.module.css";

import {getAllProduct, getAllCategory } from '../../services/productsService';
import {baseURL} from '../../constants/axios';

import ProductCard from '../../components/ProductCard/ProductCard'
import Navbar from '../../components/Navbar/Navbar';

import { useAuth } from '../../context/AuthContext';



/*  */
function Index() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Hepsi')
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);
  const {loggenIn} = useAuth();

  useEffect(() => {
    getData();
    window.addEventListener('scroll', handleScroll)
  }, [start]);

  useEffect(() => {
    getCategoryProduct(selectedCategory)
  }, [selectedCategory]);

  useEffect(() => {
    getCategory();    
  }, [])
  

  
  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;

    if (userScrollHeight >= windowBottomHeight - 0.4) {                  
      setStart(start + 1 );
      }
};

  const getData = async () => {
    const newProducts = [...products];        
    const res = await getAllProduct(start);    

    if (newProducts.length > 0) {
      let newArr = newProducts.concat(res);
      setProducts(newArr);
    } else {
      setProducts(res);
    }
}


const getCategory = async () => {
  const res = await getAllCategory();  
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
  
  return (
    <div className={styles.indexPage}>

      <div className={styles.navbar}>
        <Navbar loggenIn={loggenIn}/>
      </div>

      <div className={styles.banner}>
        <img src={Banner} alt="" />
      </div>

      <div className={styles.categories}>
        <div className={selectedCategory === 'Hepsi' ? `${styles.categoryName} ${styles.activeCategory}` : styles.categoryName} onClick={(e) => setSelectedCategory(e.target.textContent)}>Hepsi</div>
        {
          categories.map((category, index) => (
            <div className={selectedCategory === category.name ? `${styles.categoryName} ${styles.activeCategory}` : styles.categoryName} onClick={(e) => setSelectedCategory(e.target.textContent)}>{category.name}</div>          
          ))
        }
        <div className={selectedCategory === 'Diğer' ? `${styles.categoryName} ${styles.activeCategory}` : styles.categoryName} onClick={(e) => setSelectedCategory(e.target.textContent)}>Diğer</div>
      </div>

      <div className={styles.underline}></div>

      <div className={styles.products}>
        {
          products.length > 0 
          ?
          products.map((product, index) => (

            
              <ProductCard index={index} image={baseURL + product.image?.url} brand={product.brand} productColor={product.color} productPrice={product.price} productID={product.id}/>
            
           
            )) 
          :
          <div>Seçili Kategoride Ürün Bulunmamaktadır.</div>
        }                
      </div>
    </div>
  )
}

export default Index