import Menu from "./Menu";
import { useState } from "react";
import MenuModel from "renderer/models/MenuModel";


export default function Menus() {
    const menus: MenuModel[] = [
        { name:"Archivo", menuEl:["Nuevo archivo","Abrir","Guardar","Cerrar"]},
        { name:"Editar", menuEl:["Deshacer","Cortar","Copiar","Pegar"] },
        { name:"Ver", menuEl:["Buscar","Zoom"] },
        { name:"Ayuda", menuEl:["VerAyuda","Reportar","Documentación"] }
    ]

    const [show, setShow] = useState<number>();

    return (

            <div id="menuBar">
                {/* <div id="menuClose"
                    onClick={() => setShow(undefined)}
                    style={{ display: show !== undefined ? "block" : "none" }}
                /> */}
                
                {menus.map((menu, i) => (

                    <Menu 
                        show = {show === i}
                        name = {menu.name}
                        menuEl = {menu.menuEl}
                        showMe = {() => setShow(i)}
                    />
                
                ))}

                <div id="windowButtons">
                    <div><p>▬</p></div>
                    <div><p>█</p></div>
                    <div><p id="close">X</p></div>
                    
                </div>
            </div>
        
    )
}