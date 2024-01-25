import { useState } from "react";
import { useDispatch} from "react-redux"
import { postFile } from "../../redux/actions";
import validation from "./validations";
import styled from "./Form.module.css"

export default function Form(){

  const dispatch = useDispatch()

  const [newPdf, setNewPdf] = useState({
    titulo: '',
    file: null
  })

  const [errors, setErrors] = useState({
    titulo: '',
    file: null
  })

  const handleTituloChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewPdf({ ...newPdf, [name]: value })
    setErrors(validation({...newPdf, [name]: value}))
  };

  const handleFileSelect = (e) => {
    const value = e.target.files[0];
    const name = e.target.name
    setNewPdf({ ...newPdf, [name]: value })
    setErrors(validation({...newPdf, [name]: value}))
  };


  const handleFileUpload = async () => {
    const formData = await new FormData();
      formData.append('file', newPdf.file);
      formData.append('titulo', newPdf.titulo);
    dispatch(postFile(formData))
  };

  return(
    <div className={styled.containerGeneral}>
      <h3 className={styled.title}>Formulario carga de PDF</h3>
      <form className={styled.form}>
        <div className={styled.containerInput}>
          <label htmlFor="" className={styled.label}>Titulo</label>
          <input className={styled.input} type="text" name='titulo' value={newPdf.titulo} placeholder="Titulo" onChange={handleTituloChange}/>
          <p className={styled.errors}>{errors.titulo}</p>
        </div>
        <div className={styled.containerInput}>
          <label htmlFor="" className={styled.label}>Archivo</label>
          <input type="file" name="file" accept=".pdf" onChange={handleFileSelect}/>
          <p className={styled.errors}>{errors.file}</p>
        </div>
        <div className={styled.containerButton}>
          <button className={styled.button} onClick={handleFileUpload}>Cargar PDF</button>
        </div>
      </form>
    </div>
  )
}
