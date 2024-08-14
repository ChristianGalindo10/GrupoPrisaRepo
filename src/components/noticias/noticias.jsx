import { NavLink } from "react-router-dom";
import "./noticias.css";

const Noticias = ({ data,title }) => {
  return (
    <div>
      <h3 className="sectionTitle">{title}</h3>
      <div id="noticias-section">
        {data.map((noticia) => {
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/noticias/" + noticia.id}
            >
              <div className="noticias-article" key={noticia.id}>
                <img src={noticia.img} />
                <div id="noticia-texto">
                  <span
                    className="antetitulo"
                    style={{ background: noticia.color }}
                  >
                    {noticia.antetitulo}
                  </span>
                  <p>{noticia.titulo}</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Noticias;
