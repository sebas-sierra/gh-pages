import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import { collectionProd, db } from '../../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Button, Row, Col, Stack, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const {idProd} = useParams();

  useEffect(() => {
    // collectionProd
    const ref = doc(collectionProd, idProd);
    getDoc(ref)
    .then((res) => {
      console.log(res)
      setItem({
        id: res.id,
        ...res.data(),
      })
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })


    // const getProduct = () => {
    //   return new Promise ((res, rej) => {
    //     const product = products.find((prod) => prod.id === +idProd);
    //     setTimeout(() => {
    //       res(product)
    //     },2000);

    //   });
    // };
    // getProduct()
    //   .then((res)=>{
    //     setItem(res);
    //   })
    //   .catch((error)=>{
    //   console.log(error);

    // });
  }, [idProd]);

  if (loading) {
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md={1}></Col>
          <Col md={8} className="text-center" ><Spinner animation="grow" variant="secondary" /></Col>
          <Col md={1}></Col>
        </Row>
      </>
    )
  }

  return (
    <Row>
      <Col md={1}></Col>
      <Col md={10}>
        <Stack direction='horizontal'>
          <Button href='/gh-pages/#' variant="secondary" className="breadcumb" size="sm"><FontAwesomeIcon className="fa-icono " icon="fa-solid fa-house" /></Button>
          <FontAwesomeIcon className="fa-icono-gris px-3" icon="fa-solid fa-chevron-right" />
          <Button href='/gh-pages/#/capitulos/prod' variant="secondary" className="breadcumb" size="sm">Productos</Button>
          <FontAwesomeIcon className="fa-icono-gris px-3" icon="fa-solid fa-chevron-right" />
          <Button href='/gh-pages/#/capitulos/prod' variant="secondary" className="breadcumb" size="sm">Armarios</Button>
        </Stack>
        <hr />
        {/* <div style={{ marginTop: "20px", padding: "20px", borderRadius: "15px"}}></div> */}
        <ItemDetail item={item} />
      </Col>
      <Col md={1}></Col>
    </Row>
  )
}

export default ItemDetailContainer