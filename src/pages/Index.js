import React from 'react'
import brandLogoIndex from '../assets/brandLogoIndex.svg'
/* import addPlus from '../assets/addPlus.svg' */
import Banner from '../assets/Banner1.png';

function Home() {
  
  
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
      <div className="categories"></div>
      <div className="products"></div>
    </div>
  )
}

export default Home