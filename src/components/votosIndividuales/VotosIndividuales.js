import { useSelector } from "react-redux";

const VotosIndividuales = () => {
  const cantVotos = useSelector((state) => state.votos);
  return (
    <div>
      {cantVotos.map((el) => (
        <h2 key={el.id}>
          {el.name} : {el.cantVotos}
        </h2>
      ))}
    </div>
  );
};

export default VotosIndividuales;
