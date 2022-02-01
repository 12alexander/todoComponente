import { ADD_VOTOS } from "./types";

const initialState = {
  votos: [
    { id: 1, cantVotos: 0 },
    { id: 2, cantVotos: 0 },
    { id: 3, cantVotos: 0 },
    { id: 4, cantVotos: 0 },
  ],
  message: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VOTOS:
      return {
        ...state,
        votos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
