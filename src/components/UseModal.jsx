import React, { useContext } from 'react';
import { Button, Modal, Carousel, Image } from 'react-bootstrap';
import { ModalContext } from '../context/ModalContext.jsx'


const UseModal = ({item}) => {
    const { handleShow, handleClose, show } = useContext(ModalContext)
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    return (
        <div>
            {/* <Button onClick={handleShow}>Abrir modal</Button> */}
            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Body ><Button onClick={handleClose}>Close</Button>
                    <Carousel >
                        <Carousel.Item>
                            {/* <ExampleCarouselImage text="First slide" /> */}
                            <Image src={item.img} className="d-block w-100" />
                            {/* <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <Image src='https://res.cloudinary.com/dw4lpeb7n/image/upload/v1684528518/de-taller/robots-detaller_lqyqzm.jpg' className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src='https://res.cloudinary.com/dw4lpeb7n/image/upload/v1684528518/de-taller/robots-detaller_lqyqzm.jpg' className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UseModal