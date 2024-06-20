import "./cintaArticulos.css";

const CintaArticulos = ({ data }) => {
  return (
    <div id="cinta-articulos">
      {data.map((item) => {
        return (
          <div className="cinta-articulos-articulo">
            <img src={item.img} />
            <p>
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CintaArticulos;
