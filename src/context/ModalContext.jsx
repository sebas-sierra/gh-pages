import { createContext, useState } from "react";
export const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    const handleClose = () => setShow(false);

  return (
    <ModalContext.Provider value={{ show, handleShow, handleClose }}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider