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
          <option selected={mapa == "analisis"} value="analisis">Análisis</option>
        </select>
        <br/>
        <br/>
        {mapa == "general" && (
          <>
            <section className="content_section">
              <iframe
                src={
                  "https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=457f892fe6bc48ed942fb1f7df813244"
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
                  "https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=8a41eaf649e648d18c90617593740967"
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
                  "https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=0e41ba45e6ba41d5a92f52bc4f6b36e7"
                }
                className="content_full_page"
              ></iframe>
            </section>
          </>
        )}

        {mapa == "analisis" && (
          <>
            <section className="content_section">
              <iframe
                src={
                  "https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=5e213240247c4f959cc1f784d47c874d"
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
