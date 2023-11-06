import React from 'react';

const Item = ({ producto }) => {
  return (
    <div key={producto.id}>
      <p>ITEM {producto.id}</p>
      <div>
        <img src={producto.img} width="200px" alt="" />
        <article>
          <h2>{producto.title}</h2>
          <h3>${producto.price} .-</h3>
        </article>
      </div>
    </div>
  )
}

export default Item