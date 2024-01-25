import { useSelector} from "react-redux"
import Card from "../card/Card";
import { useEffect } from "react";
import { useDispatch} from "react-redux"
import { getFiles } from "../../redux/actions";
import  styled  from "./Files.module.css"

export default function Files(){
  const allFiles = useSelector((state) => state.allFiles)

  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFiles())
      }, );

    return(
      <div className={styled.containerFiles}>
        <h3 className={styled.title}>CARGA TU PDF</h3>
        <div className={styled.files}>
          {allFiles.length > 0 ? allFiles.map(({titulo, id, path})=> {
            return <Card key={id} titulo={titulo} pdf={path}/>
          }): <h4>No hay archivos cargados</h4>}
        </div>
      </div>      
    )
  }