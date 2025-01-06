import React from 'react';
import Item from './Item';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ItemList = ({ items }) => {
  return (
    <>
      {/* <p>ITEMLIST </p> */}
      <Row xs={4} md={3} className='g-4'>
        {items.map((producto) => {
          return (<Col><Item producto={producto} key={producto.id}/></Col>);
        })}
      </Row>
    </>
  )
}

export default ItemList