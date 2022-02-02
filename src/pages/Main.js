import { useDispatch } from "react-redux";
import Botones from "../components/botones/Botones";

import TotalVotos from "./../components/totalVotos/TotalVotos";
import VotosIndividuales from "../components/votosIndividuales/VotosIndividuales";
import { useEffect } from "react";
import { fetchTodos } from "./../store/actions";
import Filtros from "./../components/filtros/Filtros";
import "./main.css";
const List = [
  { id: 1, cantVotos: 0, filtro: true },
  { id: 2, cantVotos: 0, filtro: true },
  { id: 3, cantVotos: 0, filtro: true },
  { id: 4, cantVotos: 0, filtro: true },
];
function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [fetchTodos]);

  return (
    <>
      <Botones />
      <div className="body">
        <div>
          <TotalVotos />
          <VotosIndividuales />
        </div>
        <div>
          <Filtros />
        </div>
      </div>
    </>
  );
}

export default Main;
