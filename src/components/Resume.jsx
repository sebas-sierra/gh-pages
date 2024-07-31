import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Row, Col } from 'react-bootstrap'


const Resume = () => {
  const {texts} = useContext (ThemeContext)
  return (
    <Row>
      <Col xs={4}>
      </Col>
      <Col xs={8}>
        <h2>Perfil</h2>
        <p>{texts.nombreReferencia}</p>
        <p>{texts.biop1}</p>
        <p>{texts.biop2}</p>
        <p>{texts.biop3}</p>
        <p>{texts.biop4}</p>
      </Col>
    </Row>
  )
}

export default Resume