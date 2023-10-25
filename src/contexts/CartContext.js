import React, {useState, useEffect, createContext} from 'react';
import CartItem from '../components/CartItem';

//create context
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //Cart State
  const [cart, setCart] = useState([]);
  //Add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    //Check if the item is already in the cart
    const cartItem = cart.find(item => {
      return item.id===id
    });
  //if the item is alreacdy in the cart
    if (cartItem) {
      const newCart = [...cart].map(item =>{
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
    // console.log(` ${product.title} is added to the cart`);
    console.log(cart);
  }
  return <CartContext.Provider value={{cart, addToCart}}>
          {children}
        </CartContext.Provider>;
};

export default CartProvider;
