import "./profundidad.css";

const Profundidad = ({data}) => {
  return (
    <div id="destacado-section" style={{backgroundColor: data.color}}>
      <div id="destacado-img">
        <img src={data.img} />
      </div>
      <div id="destacado-txt">
        <h6 className="sectionTitle">
            {data.type}
        </h6>
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
