import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Badge, Button } from 'react-bootstrap';

import cast1 from '../../assets/img/movies/avatar/cast1.jpg';
import cast2 from '../../assets/img/movies/avatar/cast2.jpg';
import cast3 from '../../assets/img/movies/avatar/cast3.jpg';
import cast4 from '../../assets/img/movies/avatar/cast4.jpg';
import cast5 from '../../assets/img/movies/avatar/cast5.jpg';


const Item = ({ producto }) => {
  return (
    <div>
      {/* <p>ITEM</p> */}
      <Card key={producto.id} >
        <Card.Img src={producto.img} width="200px" alt="" variant="top"></Card.Img>
        <Card.Body>
          <Badge bg="success">{producto.category}</Badge>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>${producto.price} .-</Card.Text>
          <Button className="stretched-link" href={`/gh-pages/#/capitulos/itemdetail/${producto.id}` }>Ver más</Button>
        </Card.Body>
      </Card>

      <div>
        <div className='movies-card'>

          <div className='poster'>
            <img src={producto.img} width="80px" alt="" variant="top" />
          </div>
          
          <div className='details'>
            <h1>{producto.title}</h1>
            <h2>${producto.price}.-</h2>
            
            <div className='rating'>
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-regular fa-star" />
              <span> 4 / 5</span>
            </div>

            <div className='tags'>
              <span>{producto.category}</span>
              <span>Action</span>
            </div>

            <div className='info'>
              <p>Corporis amet ex qui reprehenderit laboriosam nostrum eligendi fugiat? Quae, consectetur omnis, officia blanditiis commodi odio fugiat at vel quas voluptate eligendi.</p>
            </div>

            <div className='cast'>
              <h4>Cast</h4>
              <ul>
                <li><img src={cast1} alt=""/></li>
                <li><img src={cast2} alt=""/></li>
                <li><img src={cast3} alt=""/></li>
                <li><img src={cast4} alt=""/></li>
                <li><img src={cast5} alt=""/></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Item