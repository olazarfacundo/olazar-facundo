import React from "react"
import FlightTools from "./FlightTools"
import WeatherApp from "./WeatherApp"
import Tienda from "./Tienda"
import MasInformacion from "./MasInformacion"

export default function Proyectos(props) {
    return (
        <div id="proyectos">
            <h2 className="titulo-proyectos">{props.ingles ? "Projects I've been working on" : "Proyectos en los que estuve trabajando"}</h2>
            <div className="contenedor-proyectos">
                <FlightTools ingles={props.ingles}/>
            </div>
            <div className="contenedor-proyectos">
                <WeatherApp ingles={props.ingles}/>
            </div>
            <div className="contenedor-proyectos">
                <Tienda ingles={props.ingles}/>
            </div>
            <div className="contenedor-proyectos">
                <MasInformacion ingles={props.ingles}/>
            </div>
        </div>
    )
}