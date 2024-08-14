import { NavLink } from "react-router-dom";
import "./opinion.css";

const Opinion = ({ data }) => {
  return (
    <div>
      <h3 className="sectionTitle">Análisis y Opinión</h3>
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "calc(100% - 200px)",
                  }}
                >
                  <div  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "50%",
                  }}>
                  <span style={{ fontSize: "10px" }}>
                    <strong>{item.autor}</strong> - {item.cargo}
                  </span>
                  <h5>{item.titulo}</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "50%",
                    }}
                  >
                    <p className="resume-text" style={{ marginBottom: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Opinion;
