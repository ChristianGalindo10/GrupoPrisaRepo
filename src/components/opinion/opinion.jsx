import { NavLink } from "react-router-dom";
import "./opinion.css";

const Opinion = ({ data }) => {
  return (
    <div>
      <h3>Opinión</h3>
      <div id="columnistas-section">
        {data.map((item) => {
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/opinion/" + item.id}
            >
              <div className="columnistas-article" key={item.id}>
                <img src={item.img} />
                <br />
                <h5>{item.titulo}</h5>
                <p className="resume-text">{item.desc}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Opinion;
