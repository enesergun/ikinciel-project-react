import {useState} from 'react'
import brandLogoIndex from '../assets/brandLogoIndex.svg'
/* import addPlus from '../assets/addPlus.svg' */
import Banner from '../assets/Banner1.png';

function Index() {

  const [categories] = useState(['Hepsi', 'Pantolon', 'Gömlek', 'Tişört', 'Şort', 'Sweathirt', 'Kazak', 'Polar', 'Mont', 'Abiye', 'Ayakkabı', 'Çanta', 'Triko', 'Diğer'])
  
  
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

      <div className="products"></div>
    </div>
  )
}

export default Index