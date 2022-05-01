import React, { useContext, useState } from "react";

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {

  return (
    <ProductContext.Provider
      value={{
        
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  return useContext(ProductContext);
}

export {ProductProvider, ProductContext, useProduct}