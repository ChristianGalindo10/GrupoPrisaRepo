import { useEffect } from "react";
import data from "../../components/opinion/data.json";
import { useParams } from "react-router-dom";

const opinionDetalle = () => {
  const { id } = useParams();
  const found = data.find((element) => element.id == id);
  return (
    <div className="home-content" style={{ marginTop: "50px" }}>
      <h2>{found.titulo}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate
        pulvinar porta. Pellentesque vel iaculis nisi. Sed pellentesque sem
        vitae neque commodo, at imperdiet ex ullamcorper.
      </p>
      <span>
        Por <strong>{found.autor}</strong> - {found.fecha}
      </span>
      <br />
      <br />
      <img
        src={found.img}
        style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
      />
      <br />
      <br />
      {found.contenido.map((texto) => {
        return (<p>{texto.parrafo}</p>);
      })}
    </div>
  );
};

export default opinionDetalle;
