import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,  
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 121,
  height: 113,
};

const AddImage = {
    display: 'inline-block',
    fontSize: 15,
    padding:'5px 10px',
    cursor: 'pointer',
    background: "#F4F4F4",
    color: "#B1B1B1",
    borderRadius: 10,
    marginTop: 10,
    
    
}

const container={
    border: "1px dotted #B1B1B1",
    padding: 10,
    borderRadius: 10
    
}

const dropzone = {
    width: '50%',
    margin: '0 auto',
    textAlign : 'center',
    fontSize: 14,
    fontWeight: 600,
    color: "#525252",
}

const attention = {
    color: '#B1B1B1',
    fontSize: 12,
    fontWeight: 'normal',
    marginTop: 10,
}

const removeImage = {
    height: 28,
    width: 30,
    fontSize: 21,
    backgroundColor: "rgba(0, 0, 0, .7)",
    color: "white",
    border: "none",
    borderRadius: "50%",    
    position: "relative",
    bottom: 12,
    right: 23,
}


function Previews(props) {
  const [files, setFiles] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: {
        'image/jpg': [],
        'image/png': [],
        'image/jpeg':[]
      },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      sessionStorage.setItem('image', true);      
    }
  });

  useEffect(() => {
    sessionStorage.setItem('file', JSON.stringify(files[0]))    
    
  }, [files])
  
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
          alt=""
        />
      </div>
       
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  

  return (
      <>
      {
          files.length === 0
          ? 
          <section className="container" style={container}>
          <div {...getRootProps({className: 'dropzone'})} style={dropzone}>
      <svg xmlns="http://www.w3.org/2000/svg" width="29.92" height="28.556" viewBox="0 0 29.92 28.556">
        <g id="Group_6911" data-name="Group 6911" transform="translate(-324.023 -407.388)">
            <path id="Path_14464" data-name="Path 14464" d="M353.764,420.935a7.5,7.5,0,0,0-6.955-5.511h-1.17a10.96,10.96,0,0,0-20.429-1.881c-1.842,3.836-1.5,9.775.759,13.24a.7.7,0,0,0,1.172-.765c-1.989-3.047-2.294-8.483-.677-11.852a9.565,9.565,0,0,1,17.954,2.119.7.7,0,0,0,.682.539h1.678a6.091,6.091,0,0,1,5.625,4.439,6.86,6.86,0,0,1-.908,5.052.7.7,0,0,0,.223.965.687.687,0,0,0,.37.107.7.7,0,0,0,.6-.329A8.289,8.289,0,0,0,353.764,420.935Z" fill="#4b9ce2"/>
            <path id="Path_14465" data-name="Path 14465" d="M339.46,421.91a.72.72,0,0,0-.99,0l-5.7,5.706a.7.7,0,0,0,.99.99l4.515-4.516c0,.01,0,.018,0,.027v11.127a.7.7,0,1,0,1.4,0V424.117c0-.009-.005-.017-.005-.027l4.517,4.516a.7.7,0,0,0,.99-.99Zm-.495,1.507c-.01,0-.018.005-.027.005l.027-.026.027.026C338.982,423.422,338.974,423.417,338.965,423.417Z" fill="#4b9ce2"/>
        </g>
      </svg>
        <p>Sürükleyip bırakarak yükle</p>
        <p>veya</p>
        <label style={AddImage}>Görsel Seçin</label>
        <input {...getInputProps()} />
        <p style={attention}>Sadece PNG, JPEG ve JPG formatı;Dosya boyutu max: 400kb</p>
        
        </div>
        </section>
      : <span></span>
      }
      
      <aside style={thumbsContainer}>          
        {thumbs}
        {
            files.length > 0 ? <button onClick={() => {setFiles([]); sessionStorage.removeItem('image'); sessionStorage.removeItem('file')}} style={removeImage}>x</button>  : <span></span>
        }
      </aside>
    
      </>
    
  );
}

export default Previews

