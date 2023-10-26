import React from 'react';
import ItemList from './ItemList'
import { useEffect, } from 'react';
import { products } from '../../mock/products';

const ItemListContainer = () => {
  //const [ Item, setItem ] = useState ([]);
  
  useEffect (()=>{
    const getProducts = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(products);
        }, 3500);
      });
    };

  getProducts()
  .then((res) => {
    console.log('res', res)
  })
  .catch((error) => {
    console.log('res', error);
  });

  }, []);

  return (
    <>
    <p>PRODUCTOS</p>
    <ItemList/>
    </>
  )
}

export default ItemListContainer