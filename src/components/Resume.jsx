import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Resume = () => {
  const {texts} = useContext (ThemeContext)
  return (
    <div>
        <h2>Perfil</h2>
        <p>{texts.nombreReferencia}</p>
        <p>Graphic designer, born in Lomas de Zamora, Buenos Aires, Argentina.
Graduated as a Graphic Designer at Faculty of Architecture, Design and Urbanism
(FADU - UBA) in 2011.</p>

<p>For ten years I worked as a Graphic Designer at ‘Biblioteca Nacional de Maestros’ (Teacher’s National Library), within the ‘Ministerio Nacional de Eduacion’ (National’s Education Ministry), where I carried out tasks related to the development of printed pieces of institutional communication, focusing on the design of the image and visual identity of some of its sub-brands, and later took responsibility for the development of the graphic aspect of several web products of the institution.</p>



<p>In parallel to my professional activity, I manage my free time practicing illustration, lettering, carpentry and silkscreen printing.
My goal is to combine these disciplines in order to nourish my professional/human experience and build a brand that offers carpentry goods with the added value of graphic design as a differential.</p>
    </div>
  )
}

export default Resume