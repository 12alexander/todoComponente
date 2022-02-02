import { useSelector } from "react-redux";

const VotosIndividuales = () => {
  const state = useSelector((state) => state);
  const cantVotos = () => {
    return state.votos.reduce((a, b) => (a += b.cantVotos), 0);
  };

  return (
    <div>
      {state.votos
        .filter((e) => e.filtro)
        .map((el) => (
          <h2 key={el.id}>
            {el.name} :{" "}
            {state.filtroDatos
              ? el.cantVotos
              : `${Math.trunc((el.cantVotos * 100) / cantVotos())} %`}
          </h2>
        ))}
    </div>
  );
};

export default VotosIndividuales;
