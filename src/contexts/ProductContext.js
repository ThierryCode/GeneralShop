import React, {createContext, useState, useEffect} from 'react';

//Create context
export const ProductContext = createContext();
// ProductProvider = ({children}) le props children permet de passer les donné aux enfant du context
const ProductProvider = ({children}) => {
  //Product State
  const [products, setProducts] = useState([]);
  //fetch products via api
  useEffect(()=>{
    const fetcProduct = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetcProduct();
  }, [])
  return <ProductContext.Provider value = {{products}}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
