import React from 'react';
import Item from './Item';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ItemList = ({ items }) => {
  return (
    <>
      {/* <p>ITEMLIST </p> */}
      <Row >
        <Col md={1}></Col>
        <Col>
        <Row xs={1} md={3} className='g-4'>
          {items.map((producto) => {
          return (<Col><Item producto={producto} key={producto.id}/></Col>);
        })}
        </Row>
        </Col>
        
        <Col md={1}></Col>
      </Row>
    </>
  )
}

export default ItemList