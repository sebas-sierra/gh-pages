import React from 'react'

const UninstallVSC = () => {
  return (
    <div>
        Como desinstalar completamente VSCode de una Mac
        <ul>
            <li>1.	Cerra completamente VSCode </li>
            <li>2.	Remover VScode de la carpeta Applications (para esto hay que ir a Finder -> Applications y mover VSCode to Bin) </li>
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
    </div>
  )
}

export default UninstallVSC