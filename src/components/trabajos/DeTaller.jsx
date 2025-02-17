import React from 'react'
import { Link } from 'react-router-dom'

const DeTaller = () => {
  return (
    <div>
      <h1>De-Taller</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
      <Link to={'/capitulos/prod'}>Tiendita De-Taller</Link>
    </div>
  )
}

export default DeTaller