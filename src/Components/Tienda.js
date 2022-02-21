import React from "react";
import { Carousel, CarouselItem } from "./Carousel"
import tienda from "../img/tienda.jpg"
import tienda2 from "../img/tienda-2.jpg"
import tienda3 from "../img/tienda-3.jpg"

export default function Tienda(props) {
    return (
        <div className="proyecto">
            <div className="contenedor-uno">
                <div className="imagenes-proyecto">
                    <Carousel>
                        <CarouselItem>
                            <img src={tienda} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={tienda2} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={tienda3} />
                        </CarouselItem>
                    </Carousel>
                </div>
                <div className="links-proyecto">
                    <a href="https://tienda-de-golosinas.vercel.app/" target="_blank">{props.ingles ? "View online" : "Ver sitio"}</a>
                    <a href="https://github.com/olazarfacundo/tienda-de-golosinas" target="_blank">{props.ingles ? "View repository" : "Ver repositorio"}</a>
                </div>
            </div>
            <div className="contenedor-dos">
                <div>
                    <h1>{props.ingles ? "Candy Shop" : "Tienda de golosinas"}</h1>
                </div>
                <div className="contenedor-tres">
                    <p>
                        {props.ingles ? "A candy store with a search engine and categories, you select your products and the order is generated to the seller via Whatsapp." : "Una tienda de golosinas con buscador y categorias, seleccionas tus productos y se genera el pedido al vendedor por Whatsapp."}
                        
                    </p>
                </div>
            </div>
        </div>
    )
}