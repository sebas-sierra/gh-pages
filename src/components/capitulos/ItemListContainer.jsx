import React from 'react';
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { products } from '../../mock/products';

const ItemListContainer = () => {
  const [ items, setItems ] = useState ([]);
  
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
    setItems(res);
  })
  .catch((error) => {
    console.log('res', error);
  });

  }, []);

  return (
    <>
    <p>ITEMLIST CONTAINER</p>
    <ItemList items={items}/>
    
    </>
  )
}

export default ItemListContainer