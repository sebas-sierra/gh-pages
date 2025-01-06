import React from 'react';
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
//ahora traigo la data desde firebase y no desde un archivo local -> import { products } from '../../mock/products';

import { useParams } from 'react-router-dom';
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';
import { Button, Col} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  // const valor = useParams();
  // console.log(valor.categoryName);

  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    //ahora esta constante esta definida en firebaseConfig.js -> const collectionProd = collection(db, 'productos');
    
    // Metodo abreviado con rendering condicional, para traer datos desde firebase
    const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd ;
    
    getDocs(ref)
        .then((res) => {
          //console.log(res.docs)
          const products = res.docs.map((prod) => {
            console.log(prod);
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
        .finally(() => {
          setLoading(false);
        });


//*** Metodo extendido para traer datos desde firebase
    // if (!categoryName) {
    //   getDocs(collectionProd)
    //     .then((res) => {
    //       //console.log(res.docs)
    //       const products = res.docs.map((prod) => {
    //         console.log(prod);
    //         console.log(prod.data());
    //         return {
    //           id: prod.id,
    //           ...prod.data(),

    //         };
    //       });
    //       setItems(products);
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });

    // } else {
    //   const q = query(collectionProd, where('category', '==', categoryName));
    //   getDocs(q)
    //     .then((res) => {
    //       //console.log(res.docs)
    //       const products = res.docs.map((prod) => {
    //         console.log(prod);
    //         console.log(prod.data());
    //         return {
    //           id: prod.id,
    //           ...prod.data(),

    //         };
    //       });
    //       setItems(products);
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });

    // }


//*** Metodo para traer datos desde mock */
    // if (categoryName) {

    //   const getProductsFilter = () => {
    //     return new Promise((res, rej) => {
    //       const prodFiltrados = products.filter((prod) => prod.category === categoryName);
    //       setTimeout(() => {
    //         res(prodFiltrados);
    //       }, 3500);
    //     });
    //   };

    //   getProductsFilter()
    //     .then((res) => {
    //       setItems(res);
    //     })
    //     .catch((error) => {
    //       console.log('res', error);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   return () => setLoading(true);
    // } else {

    //   const getProducts = () => {
    //     return new Promise((res, rej) => {
    //       setTimeout(() => {
    //         res(products);
    //       }, 3500);
    //     });
    //   };

    //   getProducts()
    //     .then((res) => {
    //       setItems(res);
    //     })
    //     .catch((error) => {
    //       console.log('res', error);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // }
    return () => setLoading(true);


  }, [categoryName]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Col>
      <br /><br />   
      <Button href='/gh-pages/#/capitulos/prod/category/furniture'>Furniture</Button>
      <Button href='/gh-pages/#/capitulos/prod/category/decoracion'>Decoracion</Button>
      <Button href='/gh-pages/#/capitulos/prod/category/mesas'>Mesas</Button>
      <br /><br />
      <Link to={'productos'} >Todos</Link>
      <Link to={'/capitulos/prod/category/furniture'} >Furniture</Link>
      <Link to={'/capitulos/prod/category/decoracion'} >Decoracion</Link>
      <Link to={'/capitulos/prod/category/mesas'} >Mesas</Link>
      <br /><br />
      <Outlet/>
      <ItemList items={items} />
    </Col>
  )
}

export default ItemListContainer