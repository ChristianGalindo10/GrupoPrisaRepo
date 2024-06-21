import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import "./list.css";
import agua_icon from "../../assets/icons/agua_icon.svg";
import redes_electricas from "../../assets/icons/electricidad_icon.svg";
import mineria from "../../assets/icons/mineria_icon.svg";
import bomba from "../../assets/icons/bomba_icon.svg";
import Destacados from "../../components/destacados/destacados";
import noticias2 from "../../assets/icons/noticias2.png";
import CintaArticulos from "../../components/cintaArticulos/cintaArticulos";
import caribe1 from "../../assets/icons/caribe1.png";
import caribe2 from "../../assets/icons/caribe2.png";
import caribe3 from "../../assets/icons/caribe3.png";
import Noticias from "../../components/noticias/noticias";
import dataNoticias from "../../components/noticias/data";
import Profundidad from "../../components/profundidad/profundidad";
import dataOpinion from "../../components/opinion/data.json";
import Opinion from "../../components/opinion/opinion";

const departamentos = [
  {
    label: "ATLÁNTICO",
    id: "8",
  },
  {
    label: "BOLÍVAR",
    id: "13",
  },
  {
    label: "CESAR",
    id: "20",
  },
  {
    label: "CÓRDOBA",
    id: "23",
  },
  {
    label: "LA GUAJIRA",
    id: "44",
  },
  {
    label: "MAGDALENA",
    id: "47",
  },
  {
    label: "SUCRE",
    id: "70",
  },
  {
    label: "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA",
    id: "88",
  },
];

const dataCintaArticulos = [
  {
    to: "/",
    img: caribe1,
    desc: "Consumo de energía aumentó en Colombia, con mayor demanda en el Caribe",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE",
  },
  {
    to: "/",
    img: caribe2,
    desc: "Los gobernadores del Caribe confirman la creación de empresa con énfasis en energías limpias",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE",
  },
  {
    to: "/",
    img: caribe3,
    desc: "Las bondades del Caribe para ser epicentro de energías limpias",
    color: "rgba(80, 166, 56, 1)",
    antetitulo: "ATLÁNTICO",
  },
  {
    to: "/",
    img: caribe1,
    desc: "Consumo de energía aumentó en Colombia, con mayor demanda en el Caribe",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE",
  },
];

const dataDestacados = [
  {
    to: "/",
    img: "https://estaticos.elcolombiano.com/binrepository/780x1170/0c0/780d565/none/11101/MSFA/ricardo-sierra-lider-de-celsia-10_45304754_20240608133543.jpg",
    titulo:
      "“Preocupa que está faltando energía en el país”: Ricardo Sierra, presidente de Celsia",
    desc: "El empresario le pidió al Gobierno Nacional señales regulatorias claras para que llegue la inversión que el desarrollo energético necesita, unos US$7.000 millones.",
    antetitulo: "",
    color: "rgba(80, 166, 56, 1)",
  },
  {
    to: "/",
    img: noticias2,
    titulo:
      "Con licencia ambiental de Colectora, más de 1.000 MW de energía eólica se podrá conectar a la red nacional",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate  pulvinar porta. Pellentesque vel iaculis nisi. Sed pellentesque sem  vitae neque commodo, at imperdiet ex ullamcorper",
    antetitulo: "LA GUAJIRA",
    color: "rgba(80, 166, 56, 1)",
  },
  {
    to: "/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkI8rEVQkrF1KmxGUNaZTspjW1N3M1VuOOaA&s",
    titulo:
      "Consumo de petróleo, gas y carbón se mantendrá alto en el mundo ¿qué pasa con la transición energética?",
    antetitulo: "NO RENOVABLES",
    color: "rgba(31, 100, 191, 1)",
  },
];

const FiltrosPage = () => {
  const { dep } = useParams();
  const foundObject = departamentos.find((element) => element.id === dep);
  const [proyecto, setProyecto] = useState("");

  const handleChange = (selected) => {
    if (proyecto == selected) {
      setProyecto("");
    } else {
      setProyecto(selected);
    }
  };
  const [municipio, setMunicipio] = useState("");
  const onChange2 = (event) => {
    const value = event.target.value;
    setMunicipio(value);
  };

  useEffect(() => {
    setMunicipio("");
  }, [dep]);

  useEffect(() => {}, [municipio, proyecto]);

  return (
    <>
      <div className="home-content">
        <h3 style={{ textAlign: "center", margin: "50px auto", width: "50%" }}>
          {foundObject ? foundObject.label : "CARIBE"}
        </h3>
      </div>
      <>
        {dep ? (
          <>
            <div className="home-content">
              <Destacados data={dataDestacados}></Destacados>
              <CintaArticulos data={dataCintaArticulos}></CintaArticulos>
            </div>
            <iframe
              src={
                "https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=ed9e49bc595840428e4b5cd043721793"
              }
              className="content_full_page"
            ></iframe>
            <br />
            <br />
            <div className="home-content">
              <Noticias data={dataNoticias} title={"Otras Noticias"}></Noticias>
            </div>
            <br />
            <br />
            <Profundidad
              data={{
                img: "https://www.minenergia.gov.co/media/images/El_ingeniero_Andres_Camacho_se_posesiona_como_n.original.jpg",
                titulo:
                  "“La meta del Gobierno Nacional es producir un millón de barriles de petróleo diarios”",
                desc: "El ministro de Minas y Energía, Omar Andrés Camacho resaltó que una de las claves para que Ecopetrol mejore sus utilidades es la diversificación de su producción.",
              }}
            ></Profundidad>
            <br />
            <br />
            <div className="home-content">
              <Opinion data={dataOpinion}></Opinion>
            </div>
            
          </>
        ) : (
          <>
            <div className="filterMap">
              <iframe
                src={
                  "https://mercadostech.maps.arcgis.com/apps/dashboards/a6f1d95a3fe84a33b2e41db484e3a0e6#p3=" +
                  proyecto
                }
                className="content_full_page2"
                style={{ width: "100%" }}
              ></iframe>
            </div>
            <div className="filterStats">
              <ul className="button-list">
                <li
                  onClick={() => {
                    handleChange("HIDROCARBUROS");
                  }}
                >
                  <a
                    className={
                      "button-item " +
                      (proyecto == "HIDROCARBUROS" ? "active" : "")
                    }
                  >
                    <i>
                      <img src={bomba} style={{ width: "30px" }} />
                    </i>
                    <span>Hidrocarburos</span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    handleChange("Redes eléctricas");
                  }}
                >
                  <a
                    className={
                      "button-item " +
                      (proyecto == "Redes eléctricas" ? "active" : "")
                    }
                  >
                    <i>
                      <img src={redes_electricas} style={{ width: "30px" }} />
                    </i>
                    <span>Redes eléctricas</span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    handleChange("Hidroeléctricas");
                  }}
                >
                  <a
                    className={
                      "button-item " +
                      (proyecto == "Hidroeléctricas" ? "active" : "")
                    }
                  >
                    <i>
                      <img src={agua_icon} style={{ width: "30px" }} />
                    </i>
                    <span>Hidroeléctricas</span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    handleChange("Poliductos");
                  }}
                >
                  <a
                    className={
                      "button-item " +
                      (proyecto == "Poliductos" ? "active" : "")
                    }
                  >
                    <i>
                      <img src={mineria} style={{ width: "30px" }} />
                    </i>
                    <span>Poliductos</span>
                  </a>
                </li>
              </ul>
              <br />
              <iframe
                src="https://mercadostech.maps.arcgis.com/apps/dashboards/d47ba40f3dfc4940acd9916ed5fdd7c2"
                style={{ width: "100%", height: "45%" }}
              ></iframe>
              {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi ea, inventore quos accusantium culpa aliquid
                        fugiat itaque nulla tempore alias? Eius illo accusamus
                        reprehenderit perspiciatis recusandae officiis, omnis
                        est repellendus.
                      </p> */}
            </div>
          </>
        )}
      </>
    </>
  );
};
export default FiltrosPage;
