import React, { createContext, useState } from 'react'

import { allProduct } from '../constants/products'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(allProduct)
  
  return (
    <ProductContext.Provider value={{ allProducts, setAllProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
