import React from 'react';
import { Carousel, Image } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
        <p>kjvnkfjnvdk</p>
        <Carousel>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image src='https://res.cloudinary.com/dw4lpeb7n/image/upload/v1684528518/de-taller/robots-detaller_lqyqzm.jpg' className="d-block w-100"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src='https://res.cloudinary.com/dw4lpeb7n/image/upload/v1684528518/de-taller/robots-detaller_lqyqzm.jpg' className="d-block w-100"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src='https://res.cloudinary.com/dw4lpeb7n/image/upload/v1684528518/de-taller/robots-detaller_lqyqzm.jpg' className="d-block w-100"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Home