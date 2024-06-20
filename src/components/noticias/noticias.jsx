import { NavLink } from "react-router-dom";
import "./noticias.css";

const Noticias = ({data}) => {
  return (
    <div>
      <h3>Noticias</h3>
      <div id="noticias-section">
        {data.map((noticia) => {
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
  );
};

export default Noticias;
