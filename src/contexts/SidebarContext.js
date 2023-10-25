import React, {useState, createContext} from 'react';
//create Context
export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {
  //sideBar state
  const [isOpen, setIsopen]=useState(false)

  const handleClose = () => {
    setIsopen(false);
  }

  return <SidebarContext.Provider
          value={{isOpen, setIsopen, handleClose}}>
          {children}
        </SidebarContext.Provider>;
};

export default SidebarProvider;
