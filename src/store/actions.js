import { ADD_VOTOS } from "./types";

export const addVotos = (votos) => ({
  type: ADD_VOTOS,
  payload: votos,
});
