import "./cintaArticulos.css";

const CintaArticulos = ({ data }) => {
  return (
    <div className={data.length == 4 ? 'cinta-articulos-4' : 'cinta-articulos'}>
      {data.map((item) => {
        return (
          <div className="cinta-articulos-articulo">
            <img src={item.img} />
            <span className="antetitulo" style={{background: item.color}}>{item.antetitulo}</span>
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
