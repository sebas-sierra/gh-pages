import { React, useContext} from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);
  return (
    <div>
      <Button href='/gh-pages/#/cart'>CartWidget</Button>
      <span>{totalUnidades()}</span>
    </div>
  )
}

export default CartWidget