import {
  ADD_VOTOS,
  GET_VOTOS,
  UPDATE_FILTRO_VOTO,
  UPDATE_FILTRO_DATOS,
} from "./types";
import { getVotos } from "../lib/service";

export const addVotos = (votos) => ({
  type: ADD_VOTOS,
  payload: votos,
});

export const updateFiltroDatos = (boolean) => ({
  type: UPDATE_FILTRO_DATOS,
  payload: boolean,
});

export const updateFiltroVoto = (votos) => ({
  type: UPDATE_FILTRO_VOTO,
  payload: votos,
});

export const getVotosAction = (votos) => ({
  type: GET_VOTOS,
  payload: votos,
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const all = await getVotos();
    dispatch(getVotosAction(all));
  } catch (err) {
    console.log(err);
  }
};
