import { useState } from "react";

type PropsMenu = {
    name: string;
    menuEl: string[];
    show: boolean;
    showMe: () => void;
}

export default function Menu({name, menuEl, show, showMe}:PropsMenu) {
    

    return (
        <div id="menuTitle" onClick={showMe}>
            
            <div id="menuName">{name}</div>

            <div id="menu" 
                style = {{ 
                    display: show ? "block" : "none",
                }} />

            <div id="menuElement">
                <ul>
                    {menuEl.map((menuEl) => (
                        <li>{menuEl}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}