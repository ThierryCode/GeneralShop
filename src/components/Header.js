import React, { useContext } from 'react';
//Import SidebarContext
import { SidebarContext } from '../contexts/SidebarContext';
//Import icons
import { BsBag } from "react-icons/bs"
const Header = () => {
  const {isOpen, setIsopen}=useContext(SidebarContext)
  return <header className='bg-pink-200'>
          <div>Header</div>
          <div onClick={()=>setIsopen(!isOpen)} className='cursor-pointer flex relative'>
            <BsBag className='text-2xl curso'/>
          </div>
        </header>;
};

export default Header;
