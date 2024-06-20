import dataNoticias from "../../components/noticias/data";
import "./noticiaDetail.css";
import { NavLink, useParams } from "react-router-dom";

const noticiaDetalle = () => {
  const { id } = useParams();
  const found = dataNoticias.find((element) => element.id == id);
  var otras_noticias = dataNoticias.filter(item => item.id !== id);
  otras_noticias = otras_noticias.slice(0,4);
  return (
    <div className="home-content" style={{ marginTop: "50px" }}>
      <h2>{found.titulo}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate
        pulvinar porta. Pellentesque vel iaculis nisi. Sed pellentesque sem
        vitae neque commodo, at imperdiet ex ullamcorper.
      </p>
      <span>
        <strong>{found.autor}</strong> - {found.fecha}
      </span>
      <br />
      <br />
      <div id="detalle-noticia">
        <div id="noticia-general">
          <img
            src={found.img}
            style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
          />
          <br />
          <br />
          {found.contenido.map((texto) => {
            return <p>{texto.parrafo}</p>;
          })}
        </div>
        <div id="otras-noticias">
          <h3>Otras noticias</h3>
          <div id="contenido">
          {otras_noticias.map((noticia) => {
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/noticias/" + noticia.id}
            >
              <div className="noticias-article" key={noticia.id}>
                <img src={noticia.img} />
                <p>{noticia.titulo}</p>
              </div>
            </NavLink>
          );
        })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default noticiaDetalle;
