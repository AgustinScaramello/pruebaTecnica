// import { Link } from "react-router-dom"
import styled from "./Card.module.css"

export default function Card({titulo, pdf}){

    return(
        <div className={styled.containerCard}>
            <a href={pdf} className={styled.card} download={pdf}>
                <div>
                    <h3 className={styled.title}>{titulo}</h3>
                    <iframe className={styled.pdf} src={pdf} title={titulo}/>
                </div>
            </a>
        </div>
    )
  }