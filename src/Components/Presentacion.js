import React from "react";

export default function Presentacion(props) {



    return (
        <div className="contenedor-presentacion">
            <div className="titulo">
                <h1>{props.ingles ? "Hi!" : "Hola!"}</h1>
            </div>
            <div className="mis-datos">
                <p>{props.ingles ? "My name is Facundo Olazar, im a " : "Mi nombre es Facundo Olazar, soy un estudiante de desarrollo"} <b>Front End</b> {props.ingles ? "development student, currently specializing in" : "actualmente especializandome en"} <b>React.</b></p>
                <p>{props.ingles ? "I invite you to visit this page so you can learn more about me and the projects I was focused on." : "Te invito a recorrer esta pagina para que puedas saber mas sobre mi y los proyectos en los que estuve enfocado."}</p>
            </div>
        </div>
    )
}