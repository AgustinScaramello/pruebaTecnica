export default function validation(newPdf) {
  const errors = {};

  if (!newPdf.titulo) errors.titulo = "No puede estar vacio";

  if (!newPdf.file) errors.file = "Debes cargar un archivo pdf";

  return errors;
}
