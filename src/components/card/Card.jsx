import styled from "./Card.module.css"

export default function Card({titulo, pdf}){

    return(
        <div className={styled.containerCard}>
            <h3 className={styled.title}>{titulo}</h3>
            <iframe className={styled.card} src={pdf} title={titulo} />
        </div>
    )
  }