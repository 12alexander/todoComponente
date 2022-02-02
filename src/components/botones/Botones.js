import { useSelector, useDispatch } from "react-redux";
import { addVotos } from "../../store/actions";
import "./botones.css";

const Botones = () => {
  const dispatch = useDispatch();
  const cantVotos = [...useSelector((state) => state.votos)];
  const handleClick = (e) => {
    const indice = e.target.value - 1;
    cantVotos[indice].cantVotos++;
    dispatch(addVotos(cantVotos));
  };
  return (
    <div>
      {cantVotos.map((el) => (
        <button
          key={el.id}
          onClick={handleClick}
          className="button"
          value={el.id}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default Botones;
