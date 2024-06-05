import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./home/home.css";
const Mapas = () => { 
  const { map } = useParams();
  console.log(map)
  const [mapa, setMapa] = useState(map);

  const onChange = (event) => {
    const value = event.target.value;
    setMapa(value);
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Galería de mapas
          </h4>
        </div>
        <select
          className="form-select filter-select"
          aria-label="Default select example"
          onChange={onChange}
        >
          <option selected={mapa == "general"} value="general">
            General
          </option>
          <option selected={mapa == "proyectos"} value="proyectos">Proyectos</option>
          <option selected={mapa == "potencial"} value="potencial">Potencial</option>
        </select>
        {console.log(map)}
        {mapa == "general" && (
          <>
            <h3 className="title_page">General</h3>
            <section className="content_section">
              <iframe
                src={
                  "https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=25c1dd00a01e4e859ec719d044b3f183"
                }
                className="content_full_page"
              ></iframe>
            </section>
          </>
        )}

        {mapa == "proyectos" && (
          <>
            <h3 className="title_page">Proyectos</h3>
            <section className="content_section">
              <iframe
                src={
                  "https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=be1f986a61d747d8a00dda5599ba8602"
                }
                className="content_full_page"
              ></iframe>
            </section>
          </>
        )}

        {mapa == "potencial" && (
          <>
            <h3 className="title_page">Potencial</h3>
            <section className="content_section">
              <iframe
                src={
                  "https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=ed9e49bc595840428e4b5cd043721793"
                }
                className="content_full_page"
              ></iframe>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
export default Mapas;
