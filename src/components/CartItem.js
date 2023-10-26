import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//import icons
import {IoMdClose, IoMdRemove, IoMdAdd} from "react-icons/io";
//import cart Context
import { CartContext } from '../contexts/CartContext';
  const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  //destructure item
  const {id, title, image, price, amount} = item;
  return <div className='flex gap-x-4 py-2 lg:px-6 borde-b border-gray-200 w-full font-light text-gray-500'>
          <div className='w-full min-h-[150px] flex items-center gap-x-4 ' >
            {/* image */}
            <Link to={`product/${id}`}>
              <img className="max-w-[80px]" src={image} alt="" />
            </Link>
            <div className='w-full flex flex-col'>
              {/* title & remouve icons*/}
              <div className='flex justify-between mb-2'>
                {/* title */}
                <Link 
                  to={`product/${id}`} 
                  className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
                  {title}
                </Link>
                {/* Remouv icon */}
                <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)}>
                  <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
                </div>
              </div>
              <div className='flex gap-x-2 h-[36px] text-sm'>
                {/* quantity */}
                <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                  {/* Minus icon */}
                  <div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer bg-red-500'>
                    <IoMdRemove/>
                  </div>
                  {/* amount */}
                  <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                  {/* plus icon */}
                  <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                    <IoMdAdd/>
                  </div>
                </div>
                {/* item Price */}
                <div className='flex-1 h-full flex justify-around items-center cursor-pointer'>$ {price}</div>
                {/* final Price */}
                <div className='flex-1 h-full flex justify-end items-center cursor-pointer text-primary font-medium'>{`$ ${parseFloat(price*amount).toFixed(2)}`}</div>
              </div>
            </div>
          </div>
        </div>;
};

export default CartItem;
