import { useDispatch, useSelector } from "react-redux";
import { updateFiltroDatos, updateFiltroVoto } from "../../store/actions";

const Filtros = () => {
  const votos = useSelector((state) => state.votos);
  const dispatch = useDispatch();
  const handleCheck = (e) => {
    console.log(e.target.value);
    dispatch(updateFiltroDatos(e.target.value == 2 ? true : false));
  };

  const showVoto = (el) => {
    const valor = el.target.value;
    if (valor == "todos") {
      votos.forEach((voto) => {
        voto.filtro = !voto.filtro;
      });
    }
    votos.forEach((voto) => {
      if (voto.id == valor) voto.filtro = !voto.filtro;
    });
    dispatch(updateFiltroVoto(votos));
  };
  return (
    <div>
      <h2>Filtros</h2>
      <label>
        %
        <input
          onClick={handleCheck}
          type="radio"
          id="html"
          name="ver"
          value="1"
        />
      </label>
      <label>
        Númerica
        <input
          onClick={handleCheck}
          type="radio"
          id="html"
          name="ver"
          value="2"
        />
      </label>
      <br />
      {votos.map((el) => (
        <label key={el.id}>
          <input
            key={el.id}
            onChange={showVoto}
            type="checkbox"
            name="voto"
            id={el.id}
            value={el.id}
          />
          {el.name}
        </label>
      ))}
      <label key="todos">
        <input
          key="todos"
          onChange={showVoto}
          type="checkbox"
          name="voto"
          id="todos"
          value="todos"
        />
        Todos
      </label>
    </div>
  );
};

export default Filtros;
