import { useState } from "react";
import { useDispatch} from "react-redux"
import { postFile } from "../../redux/actions";
import styled from "./Form.module.css"

export default function Form(){

  const dispatch = useDispatch()


  const [titulo, setTitulo] = useState('');
  const [file, setFile] = useState(null);
  
  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };


  const handleFileUpload = async () => {
    const formData = await new FormData();
      formData.append('file', file);
      formData.append('titulo', titulo);
    dispatch(postFile(formData))
  };

  return(
    <div className={styled.containerGeneral}>
      <h3 className={styled.title}>CARGA TU PDF</h3>
      <form className={styled.form}>
        <div className={styled.containerInput}>
          <label htmlFor="" className={styled.label}>Titulo</label>
          <input className={styled.input} type="text" value={titulo} placeholder="Titulo" onChange={handleTituloChange}/>
        </div>
        <div className={styled.containerInput}>
          <label htmlFor="" className={styled.label}>Archivo</label>
          <input className={styled.input} type="file" accept=".pdf" onChange={handleFileSelect}/>
        </div>
        <div className={styled.containerButton}>
          <button className={styled.button} onClick={handleFileUpload}>CARGAR PDF</button>
        </div>
      </form>
    </div>
  )
}
