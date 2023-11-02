import React from 'react';
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { products } from '../../mock/products';

const ItemListContainer = () => {
  const [ Item, setItem ] = useState ([]);
  
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
    setItem(res);
  })
  .catch((error) => {
    console.log('res', error);
  });

  }, []);

  return (
    <>
    <p>PRODUCTOS</p>
    <ItemList/>
    {Item.map((producto) => {
        return (
          <div>
            <img src={producto.img} width="200px" alt="" />
            <article>
              <h2>{producto.title}</h2>
              <h3>${producto.price} .-</h3>
            </article>
          </div>
        )
      })}
    </>
  )
}

export default ItemListContainer