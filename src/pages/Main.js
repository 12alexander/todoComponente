import { useDispatch } from "react-redux";
import Botones from "../components/botones/Botones";

import TotalVotos from "./../components/totalVotos/TotalVotos";
import VotosIndividuales from "../components/votosIndividuales/VotosIndividuales";
import { useEffect } from "react";
import { fetchTodos } from "./../store/actions";
const List = [
  { id: 1, cantVotos: 0 },
  { id: 2, cantVotos: 0 },
  { id: 3, cantVotos: 0 },
  { id: 4, cantVotos: 0 },
];
function Main() {
  const dispatch = useDispatch();
  /*
  const handleButton = (e) => {
    const indice = e.target.value - 1;
    List[indice].cantVotos++;
    dispatch(addVotos(List));
  };*/
  useEffect(() => {
    dispatch(fetchTodos());
  }, [fetchTodos]);

  // useEffect(() => console.log(store.getState()), []);

  return (
    <>
      <Botones />
      <TotalVotos />
      <VotosIndividuales />
    </>
  );
}

export default Main;
