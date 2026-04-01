import { React, useEffect, useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { getDocs } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';
import banner from '../../assets/img/portfolio/de-taller/banner-store-detaller.png';
import bannerA from '../../assets/img/portfolio/de-taller/vinyl-bateas-slide.png';
import bannerB from '../../assets/img/portfolio/de-taller/vinyl-case-slide.png';


const Carusel = () => {
  const [ items, setItems ] = useState([]);
  useEffect (() => {
    getDocs(collectionProd)
        .then((res) => {
          //console.log(res.docs)
          const products = res.docs.map((prod) => {
            // console.log(prod);
            console.log(prod.data());
            return {
              id: prod.id,
              ...prod.data(),

            };
          });
          setItems(products);
        })
        .catch((error) => {
          console.log(error)
        })
        // .finally(() => {
        //   setLoading(false);
        // });
  }, [])
  return (
    <>
      {/* <Carousel>
        {items.map((producto) => {
          return (
            <Carousel.Item key={producto.id}>
                <Image src={banner} className="d-block w-100 h-25"/>
                <Carousel.Caption>
                    <h3>{producto.title}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>)
          })}
      </Carousel> */}

      <Carousel className='store-slide'>
        <Carousel.Item>
          <Image src={bannerA} className="d-block w-100" />
        </Carousel.Item>
          
        <Carousel.Item >
          <Image src={bannerB} className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carusel