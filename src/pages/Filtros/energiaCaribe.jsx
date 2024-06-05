import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import "./list.css";

const energiaCaribe = () => {
  const { energia } = useParams();
  const [proyecto, setProyecto] = useState(energia);


  const energias = [
    {
      label: 'Hidrocarburos',
      id: 'HIDROCARBUROS'
    },
    {
      label: 'Redes eléctricas',
      id: 'Redes eléctricas'
    },
    {
      label: 'Hidroeléctricas',
      id: 'Hidroeléctricas'
    },
    {
      label: 'Poliductos',
      id: 'poliductos'
    },
  ]

  const foundObject = energias.find((element) => element.id === energia);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Proyectos energéticos caribe - {foundObject.label}
          </h4>
        </div>
        <br />
        <section className="content_section2">
            <div className="filterMap" style={{width: '100%'}}>
              <iframe
                src={
                  "https://mercadostech.maps.arcgis.com/apps/dashboards/df52575dd13c4eeb825ccf21374a31fb#p3=" +
                  proyecto
                }
                className="content_full_page2"
                style={{ width: "100%" }}
              ></iframe>
            </div>
        </section>
      </div>
    </div>
  );
};
export default energiaCaribe;
