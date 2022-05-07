import React, {useState, useEffect} from 'react';
import ImageUploading from 'react-images-uploading';

import { useProduct } from '../../context/ProductContext';

import styles from './DragAndDrop.module.css'


function Previews({maxFileSize, acceptType}) {

  const { imageFile} = useProduct();

  const [images, setImages] = useState([]);
  

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    imageFile(imageList[0]?.file);
  };

  console.log(images[0]?.file);

  /* useEffect(() => {
    sessionStorage.setItem('file', JSON.stringify(images[0]?.file));
  }, [images]) */
  

  return (
    <div className={styles.DragAndDrop}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}        
        dataURLKey="data_url"
        maxFileSize={maxFileSize} 
        acceptType={acceptType}
      >
        {({
          imageList,
          onImageUpload,          
          
          onImageRemove,
          isDragging,
          dragProps,
          errors
        }) => (

          <>
           {
             imageList.length > 0 
             ? 
             <>
              {imageList.map((image, index) => (
                  <div key={index} className={styles.imageItem}>
                    <img src={image['data_url']} alt="" width="100" />                    
                      <button onClick={() => onImageRemove(index)} className={styles.RemoveImageButton} >
                        <svg width="6" height="6" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.7734 16.809L12.9401 9.95315L19.7891 3.18584C20.0703 2.90474 20.0703 2.44664 19.7891 2.16554L17.8411 0.208225C17.7057 0.0728787 17.5234 0 17.3307 0C17.138 0 16.9557 0.0780843 16.8203 0.208225L10.0026 6.95471L3.17448 0.213431C3.03906 0.0780847 2.85677 0.00520594 2.66406 0.00520594C2.47135 0.00520594 2.28906 0.0832903 2.15365 0.213431L0.210938 2.17074C-0.0703125 2.45185 -0.0703125 2.90994 0.210938 3.19105L7.0599 9.95835L0.231771 16.809C0.0963543 16.9443 0.0182293 17.1265 0.0182293 17.3191C0.0182293 17.5117 0.0911459 17.6939 0.231771 17.8293L2.17969 19.7866C2.32031 19.9271 2.5026 20 2.6901 20C2.8724 20 3.0599 19.9323 3.20052 19.7866L10.0026 12.9568L16.8099 19.7814C16.9505 19.9219 17.1328 19.9948 17.3203 19.9948C17.5026 19.9948 17.6901 19.9271 17.8307 19.7814L19.7786 17.8241C19.9141 17.6887 19.9922 17.5065 19.9922 17.3139C19.987 17.1265 19.9089 16.9443 19.7734 16.809Z" fill="white"/>
                        </svg>
                      </button>
                  </div>
            ))}
             </>            
             : 
             <>
             <div className={styles.uploadImageWrapper} {...dragProps}>

              <svg xmlns="http://www.w3.org/2000/svg" width="29.92" height="28.556" viewBox="0 0 29.92 28.556">
              <g id="Group_6911" data-name="Group 6911" transform="translate(-324.023 -407.388)">
                <path id="Path_14464" data-name="Path 14464" d="M353.764,420.935a7.5,7.5,0,0,0-6.955-5.511h-1.17a10.96,10.96,0,0,0-20.429-1.881c-1.842,3.836-1.5,9.775.759,13.24a.7.7,0,0,0,1.172-.765c-1.989-3.047-2.294-8.483-.677-11.852a9.565,9.565,0,0,1,17.954,2.119.7.7,0,0,0,.682.539h1.678a6.091,6.091,0,0,1,5.625,4.439,6.86,6.86,0,0,1-.908,5.052.7.7,0,0,0,.223.965.687.687,0,0,0,.37.107.7.7,0,0,0,.6-.329A8.289,8.289,0,0,0,353.764,420.935Z" fill="#4b9ce2"/>
                <path id="Path_14465" data-name="Path 14465" d="M339.46,421.91a.72.72,0,0,0-.99,0l-5.7,5.706a.7.7,0,0,0,.99.99l4.515-4.516c0,.01,0,.018,0,.027v11.127a.7.7,0,1,0,1.4,0V424.117c0-.009-.005-.017-.005-.027l4.517,4.516a.7.7,0,0,0,.99-.99Zm-.495,1.507c-.01,0-.018.005-.027.005l.027-.026.027.026C338.982,423.422,338.974,423.417,338.965,423.417Z" fill="#4b9ce2"/>
              </g>
            </svg>
            
            <p className="dragNdropText">Sürükleyip bırakarak yükle</p>
            <p>veya</p>
            <button className={styles.AddImageButton}              
              onClick={onImageUpload}              
            >
              Görsel Seçin
            </button>

            <div className={styles.Attention}>PNG ve JPEG Dosya boyutu: max. 400kb</div>
            {
               errors && <div>
               
               {errors.acceptType && <span className={styles.error}>Seçtiğiniz fotoğraf tipi desteklenmiyor</span>}
               {errors.maxFileSize && <span className={styles.error}>Yalnızca 400kb küçük fotoğraflar</span>}
               
             </div>
            }  
            </div>
             </>
           }
          </>          
           
        )}
      </ImageUploading>
    </div>
  );
}

export default Previews


/* <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg> */