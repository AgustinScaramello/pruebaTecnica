import Files from "../../components/files/Files"
import Form from "../../components/form/Form"
import Carousel from "../../components/carousel/Carousel"
import styled from "./Home.module.css"

export default function Home(){

    return(
        <div className={styled.containerHome}>
            <div className={styled.bar}>
                <h1 className={styled.titulo}>Prueba tecnica Frontend | Grupo Penna | Agustin Scaramello</h1>
            </div>
            <Carousel/>
            <Files/>
            <Form/>
        </div>
    )
}