import { NavLink } from "react-router-dom";
import "./destacados.css";

const Destacados = ({data}) => {
    return(
        <div id="container-noticias1">
          <div class="left">
            <NavLink
              style={{ textDecoration: "none" }}
              to={
                data[0].to
              }
              target="_blank"
            >
              <img
                src={
                  data[0].img
                }
              />
              <h4 style={{ fontWeight: "bold" }}>
                {data[0].titulo}
              </h4>
              <p>
                {data[0].desc}
              </p>
            </NavLink>
          </div>

          <div class="right-top">
            <NavLink
              style={{ textDecoration: "none" }}
              to={
                data[1].to
              }
              target="_blank"
            >
              <img src={data[1].img} />
              <h5 style={{ fontWeight: "bold" }}>
                {data[1].titulo}
              </h5>
            </NavLink>
          </div>
          <div class="right-bottom">
            <img src={data[2].img} />
            <h5 style={{ fontWeight: "bold" }}>
              {data[2].titulo}
            </h5>
          </div>
        </div>
    )
}

export default Destacados;