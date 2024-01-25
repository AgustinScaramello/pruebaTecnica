import { POST_FILE, GET_FILES } from "./actions";

const initialState = {
  pdf: null,
  allFiles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FILE:
      return {
        ...state,
        pdf: action.payload,
      };
    case GET_FILES:
      return {
        ...state,
        allFiles: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
