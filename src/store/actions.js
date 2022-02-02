import { ADD_VOTOS, GET_VOTOS } from "./types";
import { getVotos } from "../lib/service";

export const addVotos = (votos) => ({
  type: ADD_VOTOS,
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
