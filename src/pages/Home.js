import React, {useContext} from 'react';
//import product Contentxt
import { ProductContext } from '../contexts/ProductContext';
//import component Product 
import Product from "../components/Product";
//import Hero components
import Hero from '../components/Hero';
const Home = () => {
  //get product from productContext
  const {products} = useContext(ProductContext);
  // console.log(products);
  //Get only "men's clothing" & women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  return <div>
          <Hero />
          <section className='py-16'>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map(product=>{
                  return <Product product={product} key={product.id}/>
                })}
              </div>
            </div>
          </section>
        </div>;
};

export default Home;
