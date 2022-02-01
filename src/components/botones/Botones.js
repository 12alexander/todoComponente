import "./botones.css";

const Botones = ({ callback }) => {
  return (
    <div>
      <button onClick={callback} className="button" value="1">
        C1
      </button>
      <button onClick={callback} className="button" value="2">
        C2
      </button>
      <button onClick={callback} className="button" value="3">
        C3
      </button>
      <button onClick={callback} className="button" value="4">
        C4
      </button>
    </div>
  );
};

export default Botones;
