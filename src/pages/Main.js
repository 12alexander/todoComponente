import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Botones from "../components/botones/Botones";
import store from "../store";
import { addVotos } from "../store/actions";
import TotalVotos from "./../components/totalVotos/TotalVotos";
const List = [
  { id: 1, cantVotos: 0 },
  { id: 2, cantVotos: 0 },
  { id: 3, cantVotos: 0 },
  { id: 4, cantVotos: 0 },
];
function Main() {
  const dispatch = useDispatch();
  const votos = [...useSelector((state) => state.votos)];

  const handleButton = (e) => {
    const indice = e.target.value - 1;
    List[indice].cantVotos++;
    dispatch(addVotos(List));
  };
  useSelector((state) => state.votos[1].cantVotos);
  useSelector((state) => state.votos[2].cantVotos);
  useSelector((state) => state.votos[3].cantVotos);
  useSelector((state) => state.votos[0].cantVotos);
  const cantVotos = () => {
    return votos.reduce((a, b) => {
      return (a += b.cantVotos);
    }, 0);
  };

  // useEffect(() => console.log(store.getState()), []);

  return (
    <>
      <Botones callback={handleButton} />
      <TotalVotos cantVotos={cantVotos} />
    </>
  );
}

export default Main;
