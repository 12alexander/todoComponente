import { useSelector } from "react-redux";

const TotalVotos = () => {
  const cantVotos = useSelector((state) =>
    state.votos.reduce((a, b) => (a += b.cantVotos), 0)
  );
  return (
    <div>
      <h2>Total Votos {cantVotos}</h2>
    </div>
  );
};

export default TotalVotos;
