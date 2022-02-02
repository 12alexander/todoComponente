import {
  ADD_VOTOS,
  GET_VOTOS,
  UPDATE_FILTRO_VOTO,
  UPDATE_FILTRO_DATOS,
} from "./types";

const initialState = {
  votos: [],
  filtroDatos: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VOTOS:
      return {
        ...state,
        votos: action.payload,
      };
    case UPDATE_FILTRO_DATOS:
      return {
        ...state,
        filtroDatos: action.payload,
      };
    case UPDATE_FILTRO_VOTO:
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
