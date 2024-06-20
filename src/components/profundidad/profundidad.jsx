import "./profundidad.css";

const Profundidad = ({data}) => {
  return (
    <div id="destacado-section">
      <div id="destacado-img">
        <img src={data.img} />
      </div>
      <div id="destacado-txt">
        <h3>
            En profundidad
        </h3>
        <br/>
        <h2 id="profundidad-titulo">
          {data.titulo}
        </h2>
        <br/>
        <p>
            {data.desc}
        </p>
      </div>
    </div>
  );
};

export default Profundidad;
