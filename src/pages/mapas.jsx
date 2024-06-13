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
      <div className="home-content">
          <h3
            style={{textAlign: 'center', margin: '50px auto', width: '50%'}}
          >
            Galería de mapas
          </h3>
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
        <br/>
        <br/>
        {mapa == "general" && (
          <>
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
            <section className="content_section">
              <iframe
                src={
                  "https://arcg.is/1qbTD50"
                }
                className="content_full_page"
              ></iframe>
            </section>
          </>
        )}

        {mapa == "potencial" && (
          <>
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
  );
};
export default Mapas;
