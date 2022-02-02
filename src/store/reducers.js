import { ADD_VOTOS, GET_VOTOS } from "./types";

const initialState = {
  votos: [],
  message: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VOTOS:
      return {
        ...state,
        votos: action.payload,
      };
    case GET_VOTOS:
      const votos = [...state.votos, ...action.payload];

      return {
        ...state,
        votos,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
