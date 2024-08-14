import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
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

const dataCintaArticulos = [
  {
    to: "/",
    img: caribe1,
    desc: "Consumo de energía aumentó en Colombia, con mayor demanda en el Caribe",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "SOLAR",
  },
  {
    to: "/",
    img: caribe2,
    desc: "Los gobernadores del Caribe confirman la creación de empresa con énfasis en energías limpias",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "HÍDRICA",
  },
  {
    to: "/",
    img: caribe3,
    desc: "Las bondades del Caribe para ser epicentro de energías limpias",
    color: "rgba(80, 166, 56, 1)",
    antetitulo: "EÓLICA",
  },
  {
    to: "/",
    img: caribe1,
    desc: "Consumo de energía aumentó en Colombia, con mayor demanda en el Caribe",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "SOLAR",
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
      "Con licencia ambiental de Colectora, más de 1.000 MW de energía eólica se podrán conectar a la red nacional",
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

const RenovablesPage = () => {
  return (
    <>
      <div className="home-content">
        <h3 style={{ textAlign: "center", margin: "50px auto 0", width: "50%" }}>
          ENERGÍAS RENOVABLES
        </h3>
        <p style={{marginTop: '10px', textAlign: 'center'}}>SOLAR - EÓLICA - HÍDRICA  - HIDRÓGENO - BIOMASA </p>
      </div>

      <div className="home-content">
        <Destacados data={dataDestacados}></Destacados>
        <br />
        <br />
        <h3>Proyectos Actuales</h3>
      </div>
      <iframe
        src={"https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=0e41ba45e6ba41d5a92f52bc4f6b36e7"}
        className="content_full_page"
      ></iframe>
      <br />
      <br />
      <div className="home-content">
        <CintaArticulos data={dataCintaArticulos}></CintaArticulos>
      </div>

      <div className="home-content">
        <Noticias data={dataNoticias} title={"Otras Noticias"}></Noticias>
        <br />
        <br />
        <h3>Potencial Energético</h3>
      </div>
      <iframe
        src={
          "https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=ed9e49bc595840428e4b5cd043721793"
        }
        className="content_full_page"
      ></iframe>
      <br />
      <br />
      <Profundidad
        data={{
          type: 'EN PROFUNDIDAD',
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
        <br />
        <br />
        <h3>Mapa General</h3>
      </div>
      <iframe
        src={
          "https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=457f892fe6bc48ed942fb1f7df813244"
        }
        className="content_full_page"
      ></iframe>
    </>
  );
};
export default RenovablesPage;
