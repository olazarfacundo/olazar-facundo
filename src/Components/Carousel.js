import React, { useState } from "react"
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export function CarouselItem({ children, width }) {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    )
}

export const Carousel = ({ children }) => {

    const [indiceActivo, setIndiceActivo] = useState(0)

    const actualizarIndice = (nuevoIndice) => {
        if (nuevoIndice < 0) {
            nuevoIndice = 0
        } else if (nuevoIndice >= React.Children.count(children)) {
            nuevoIndice = React.Children.count(children) - 1
        }

        setIndiceActivo(nuevoIndice)
    }

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${indiceActivo}00%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <div className="indicadores">
                <button
                    onClick={() => actualizarIndice(indiceActivo - 1)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>


                <button
                    onClick={() => actualizarIndice(indiceActivo + 1)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    )
}