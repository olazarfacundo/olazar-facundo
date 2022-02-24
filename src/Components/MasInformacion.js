import React from "react"
import gitHub from "../img/github.png"
import linkedin from "../img/linkedin.png"
import curriculum from "../img/curriculum.png"

export default function MasInformacion(props) {
    return (
        <>
            <div className="contenedor-extra" id="contacto">
                <div className="extra-box">
                    <div className="extra-box-header">
                        <h1>Git Hub</h1>
                        <p>{props.ingles ? "You can see my other works below." : "Podes ver mis otros trabajos aca abajo."}</p>
                    </div>
                    <div className="extra-box-img">
                        <a href="https://github.com/olazarfacundo/">
                            <img src={gitHub} />
                        </a>
                    </div>
                </div>
                <div className="extra-box curriculum">
                    <div className="extra-box-header">
                        <h1>{props.ingles ? "Resume" : "Curriculum"}</h1>
                        <p>{props.ingles ? "A summary of my professional life." : "Un resumen de mi vida profesional."}</p>
                    </div>
                    <div className="extra-box-img">

                        <a href="https://olazar-facundo-cv.tiiny.site/" target="_blank">
                            <img src={curriculum} />
                        </a>
                    </div>
                </div>
                <div className="extra-box">
                    <div className="extra-box-header">
                        <h1>Linkedin</h1>
                        <p>{props.ingles ? "Let's keep in touch." : "Sigamos en contacto."}</p>
                    </div>
                    <div className="extra-box-img linkedin">
                        <a href="https://linkedin.com/in/facundo-olazar" target="_blank">
                            <img src={linkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
