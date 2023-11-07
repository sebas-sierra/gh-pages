import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({ producto }) => {
  return (
    <Card key={producto.id}>
      <Card.Img src={producto.img} width="200px" alt="" variant="top"></Card.Img>
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>${producto.price} .-</Card.Text>
        <Button>Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item