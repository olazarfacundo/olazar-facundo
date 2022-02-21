import React from "react"
import { Carousel, CarouselItem } from "./Carousel"
import clima from "../img/clima.jpg"
import clima2 from "../img/clima-2.jpg"
import clima3 from "../img/clima-3.jpg"

export default function WeatherApp(props) {
    return (
        <>
            <div className="proyecto clima">
                <div className="contenedor-uno">
                    <div className="imagenes-proyecto">
                        <Carousel>
                            <CarouselItem>
                                <img src={clima} />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={clima2} />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={clima3} />
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className="links-proyecto">
                        <a href="https://clima-olz.vercel.app/" target="_blank">{props.ingles ? "View online" : "Ver sitio"}</a>
                        <a href="https://github.com/olazarfacundo/clima-olz" target="_blank">{props.ingles ? "View repository" : "Ver repositorio"}</a>
                    </div>
                </div>
                <div className="contenedor-dos">
                    <div>
                        <h1>Weather App</h1>
                    </div>
                    <div className="contenedor-tres">
                        <p>
                            {props.ingles ? "Weather application that provides all the current information and forecast for the next 12 hours regarding the user's location, or about the cities he wants to search for." : "Aplicacion del clima que brinda toda la informacion actual y pronostico por las proximas 12 hs respecto a la ubicacion del usuario, o sobre las ciudades que el quiera buscar."}
                            
                        </p>

                        <p>
                            {props.ingles ? "The locations that the user saves will also be saved in the device's local storage" : "Las ubicaciones que el usuario guarde, se van a guardar tambien en el almacenamiento local del dispositivo."}
                            </p>
                    </div>
                </div>
            </div>
        </>
    )
}