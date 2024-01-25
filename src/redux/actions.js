import axios from "axios";

export const POST_FILE = "POST_FILE";
export const GET_FILES = "GET_FILES";

export const postFile = (formData) => {
  const apiUrl = "http://localhost:3001/api/prueba/pdf";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return dispatch({ type: POST_FILE, payload: data });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};

export const getFiles = () => {
  const apiUrl = "http://localhost:3001/api/prueba/pdf";
  return async (dispatch) => {
    try {
      const { data } = await axios(apiUrl);
      return dispatch({ type: GET_FILES, payload: data.files });
    } catch (error) {
      console.error("Error al realizar la solcitud:", error);
    }
  };
};
