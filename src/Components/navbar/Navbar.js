import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-scroll"
import banderaES from "../../img/españa.png"
import banderaUK from "../../img/gran-bretaña.png"

export default function Navbar(props) {

    const [ingles, setIngles] = useState(false)

    const cambiarBandera = () => {
        setIngles(prev => !prev)
        props.toggleLanguage()
    }

    return (
        <div className="navbar">
            <ul>
                <li><Link className="link" to="proyectos" spy={true} smooth={true} offset={50} duration={750}> {ingles ? "Projects" : "Proyectos"} </Link></li>
                <li><Link classNmae="link" to="contacto" spy={true} smooth={true} offset={50} duration={1000}>{ingles ? "Contact" : "Contacto"}</Link></li>
                <li>
                    <a onClick={cambiarBandera}>
                        {ingles ? <img src={banderaES} /> : <img src={banderaUK} />}
                    </a>
                </li>
            </ul>
        </div>
    )
}