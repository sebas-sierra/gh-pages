import React from 'react'
import { Badge, Card } from 'react-bootstrap'

const UninstallVSC = () => {
  return (
      <Card>
        <Card.Header><Badge pill bg="secondary">Anexo </Badge><h1>Como desinstalar completamente VSCode de una Mac</h1></Card.Header>
        <Card.Body>
          <ul>
            <li>1.	Cerra completamente VSCode</li>
            <li>2.	Remover VScode de la carpeta Applications (para esto hay que ir a Finder - Applications y mover VSCode to Bin) </li>
            <li>3.	Executar estos comandos en cualquier orden. Las rutas podrian ser un poco distintas dependiendo del Sistema Operativo. </li>
            <ul>
              <li>rm -fr ~/.vscode*</li>
              <li>rm -fr ~/Library/Application\ Support/Code/</li>
              <li>rm -fr ~/Library/Saved\ Application\ State/com.microsoft.VSCode.savedState/</li>
              <li>rm -fr ~/Library/Preferences/com.microsoft.VSCode.helper.plist </li>
              <li>rm -fr ~/Library/Preferences/com.microsoft.VSCode.plist </li>
              <li>rm -fr ~/Library/Caches/com.microsoft.VSCode</li>
              <li>rm -fr ~/Library/Caches/com.microsoft.VSCode.ShipIt/</li>
            </ul>
            <li>4.	Reinstalar VSCode</li>
          </ul>
        </Card.Body>
      </Card>
      )
}

export default UninstallVSC