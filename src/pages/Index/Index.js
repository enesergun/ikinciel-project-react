import {useState, useEffect, Suspense, lazy} from 'react'

import BannerDesktop from '../../assets/BannerDesktop.webp';
import BannerMobile from '../../assets/BannerMobile.webp';
import styles from "../style/Index.module.css";

import {getAllProduct, getAllCategory } from '../../services/productsService';
import {baseURL} from '../../constants/axios';

/* import ProductCard from '../../components/ProductCard/ProductCard' */
import Navbar from '../../components/Navbar/Navbar';

import { useAuth } from '../../context/AuthContext';

import useWindowSize from "../../hooks/useWindowSize";

const ProductCard = lazy(() => import('../../components/ProductCard/ProductCard'));


/*  */
function Index() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Hepsi')
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);
  const {loggenIn} = useAuth();

  const [width] = useWindowSize(400, 600);

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

    if (userScrollHeight >= windowBottomHeight - 1) {                  
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

      {
        width > 375 
        ? 
        <div className={styles.banner}>
          <img src={BannerDesktop} alt="" />
        </div>
        : 
        <div className={styles.banner}>
          <img src={BannerMobile} alt="" />
        </div>
      }

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
        <Suspense fallback={<div>Yükleniyor...</div>}>
          {
            products.length > 0 
            ?
            products.map((product, index) => (

              
                <ProductCard index={index} image={width > 375 ? baseURL + product.image?.formats?.medium?.url : baseURL + product.image?.formats?.small?.url} brand={product.brand} productColor={product.color} productPrice={product.price} productID={product.id}/>
              
            
              )) 
            :
            <div>Seçili Kategoride Ürün Bulunmamaktadır.</div>
          }
        </Suspense>
      </div>
    </div>
  )
}

export default Index