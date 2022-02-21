import React from "react"
import { Carousel, CarouselItem } from "./Carousel"
import flight1 from "../img/flight-tools.jpg"
import flight2 from "../img/flight-tools-2.jpg"
import flight3 from "../img/flight-tools-3.jpg"

export default function FlightTools(props) {
    return (
        <>
            <div className="proyecto">
                <div className="contenedor-uno">
                    <div className="imagenes-proyecto">
                        <Carousel>
                            <CarouselItem>
                                <img src={flight1}/>
                                </CarouselItem>
                            <CarouselItem>
                                <img src={flight2}/>
                                </CarouselItem>
                            <CarouselItem>
                                <img src={flight3}/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className="links-proyecto">
                        <a href="https://flight-tools.vercel.app/" target="_blank">{props.ingles ? "View online" : "Ver sitio"}</a>
                        <a href="https://github.com/olazarfacundo/flight-tools" target="_blank">{props.ingles ? "View repository" : "Ver repositorio"}</a>
                    </div>
                </div>
                <div className="contenedor-dos">
                    <div>
                        <h1>Flight Tools</h1>
                    </div>
                    <div className="contenedor-tres">
                        <p> 
                            {props.ingles ? "A set of tools for plane, helicopter or glitch pilots " : "Un conjunto de herramientas para pilotos de avion, helicoptero o planeador."}

                            {props.ingles ? "among which are:" : "Entre las cuales se encuentran:"}
                        </p>
                    </div>
                    <ul>
                        <li>{props.ingles ? "Calculate the time of flight" : "Calcular el tiempo de vuelo"}</li>
                        <li>{props.ingles ? "Calculate the fuel consumption" : "Calcular el consumo del vuelo"}</li>
                        <li>{props.ingles ? "Convert measurement units like weight, length, velocity, etc." : "Convertir unidades de medida como peso, longitud, velocidad, etc."}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}