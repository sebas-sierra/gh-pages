import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import { collectionProd, db } from '../../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from 'react-bootstrap';

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
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>breadcrumb<Button href='/gh-pages/#/capitulos/prod' variant="secondary" size="sm">Volver</Button>
    <div style={{backgroundColor: "lightblue", marginTop: "20px", padding: "20px", borderRadius: "15px"}}>
      <ItemDetail item={item}/>
    </div>
    </>
  )
}

export default ItemDetailContainer