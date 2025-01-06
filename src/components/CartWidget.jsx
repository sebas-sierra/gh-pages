import { React, useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);
  return (
    <div>
      <Button href='/gh-pages/#/cart' variant="dark">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <Badge bg="primary" className='ms-3' pill>
          {totalUnidades()}
        </Badge>
      </Button>
      {/* <span>{totalUnidades()}</span> */}
    </div>
  )
}

export default CartWidget