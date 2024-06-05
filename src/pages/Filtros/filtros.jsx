import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import "./list.css";
import agua_icon from "../../assets/icons/agua_icon.svg";
import redes_electricas from "../../assets/icons/electricidad_icon.svg";
import mineria from "../../assets/icons/mineria_icon.svg";
import bomba from "../../assets/icons/bomba_icon.svg";

const departamentos = [
  {
    label: "Atlántico",
    id: "8",
  },
  {
    label: "Bolívar",
    id: "13",
  },
  {
    label: "Cesar",
    id: "20",
  },
  {
    label: "Córdoba",
    id: "23",
  },
  {
    label: "La Guajira",
    id: "44",
  },
  {
    label: "Magdalena",
    id: "47",
  },
  {
    label: "Sucre",
    id: "70",
  },
  {
    label: "Archipiélago de San Andrés, Providencia Y Santa Catalina",
    id: "88",
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
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Proyectos energéticos {foundObject ? foundObject.label : "caribe"}
          </h4>
        </div>
        <div id="filtersSection">
          {dep == "8" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="8001">BARRANQUILLA</option>
              <option value="8078">BARANOA</option>
              <option value="8296">GALAPA</option>
              <option value="8421">LURUACO</option>
              <option value="8433">MALAMBO</option>
              <option value="8549">PIOJO</option>
              <option value="8560">PONEDERA</option>
              <option value="8638">SABANALARGA</option>
              <option value="8758">SOLEDAD</option>
              <option value="8832">TUBARA</option>
            </select>
          )}
          {dep == "13" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="13001">CARTAGENA DE INDIAS</option>
              <option value="13052">ARJONA</option>
              <option value="13140">CALAMAR</option>
              <option value="13222">CLEMENCIA</option>
              <option value="13244">EL CARMEN DE BOLÍVAR</option>
              <option value="13442">MARÍA LA BAJA</option>
              <option value="13468">SANTA CRUZ DE MOMPOX</option>
              <option value="13647">SAN ESTANISLAO</option>
              <option value="13654">SAN JACINTO</option>
              <option value="13673">SANTA CATALINA</option>
              <option value="13683">SANTA ROSA</option>
              <option value="13894">ZAMBRANO</option>
              <option value="13430">MAGANGUÉ</option>
            </select>
          )}
          {dep == "20" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="20178">CHIRIGUANÁ</option>
              <option value="20238">EL COPEY</option>
              <option value="20250">EL PASO</option>
              <option value="20001">VALLEDUPAR</option>
              <option value="20621">LA PAZ</option>
              <option value="20011">AGUACHICA</option>
            </select>
          )}
          {dep == "23" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="23001">MONTERÍA</option>
              <option value="23079">BUENAVISTA</option>
              <option value="23182">CHINÚ</option>
              <option value="23189">CIÉNAGA DE ORO</option>
              <option value="23300">COTORRA</option>
              <option value="23464">MOMIL</option>
              <option value="23570">PUEBLO NUEVO</option>
              <option value="23660">SAHAGÚN</option>
              <option value="23670">SAN ANDRÉS DE SOTAVENTO</option>
              <option value="23675">SAN BERNARDO DEL VIENTO</option>
              <option value="23466">MONTELÍBANO</option>
              <option value="23580">PUERTO LIBERTADOR</option>
            </select>
          )}
          {dep == "44" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="44110">EL MOLINO</option>
              <option value="44001">RIOHACHA</option>
              <option value="44035">ALBANIA</option>
              <option value="44650">SAN JUAN DEL CESAR</option>
              <option value="44847">URIBIA</option>
              <option value="44430">MAICAO</option>
              <option value="44560">MANAURE</option>
            </select>
          )}
          {dep == "47" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="47555">PLATO</option>
              <option value="47745">SITIONUEVO</option>
              <option value="47980">ZONA BANANERA</option>
              <option value="47053">ARACATACA</option>
              <option value="47001">SANTA MARTA</option>
            </select>
          )}
          {dep == "70" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option selected value="">
                SELECCIONE UN MUNICIPIO
              </option>
              <option value="70215">COROZAL</option>
              <option value="70221">COVEÑAS</option>
              <option value="70523">PALMITO</option>
              <option value="70670">SAMPUÉS</option>
              <option value="70742">SAN LUIS DE SINCÉ</option>
              <option value="70820">SANTIAGO DE TOLÚ</option>
              <option value="70823">SAN JOSÉ DE TOLUVIEJO</option>
            </select>
          )}
        </div>
        <br />
        <section className="content_section2">
          <>
            {dep ? (
              <>
                {municipio ? (
                  <>
                    <div className="filterMap">
                      <iframe
                        src={
                          "https://mercadostech.maps.arcgis.com/apps/dashboards/df52575dd13c4eeb825ccf21374a31fb#p1=" +
                          municipio +
                          "&p3=" +
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
                            handleChange("poliductos");
                          }}
                        >
                          <a
                            className={
                              "button-item " +
                              (proyecto == "poliductos" ? "active" : "")
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
                      <iframe src={"https://mercadostech.maps.arcgis.com/apps/dashboards/d47ba40f3dfc4940acd9916ed5fdd7c2#po1=" + municipio} style={{width: '100%', height: '45%'}}>
                      </iframe>
                      {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi ea, inventore quos accusantium culpa aliquid
                        fugiat itaque nulla tempore alias? Eius illo accusamus
                        reprehenderit perspiciatis recusandae officiis, omnis
                        est repellendus.
                      </p> */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="filterMap">
                      <iframe
                        src={
                          "https://mercadostech.maps.arcgis.com/apps/dashboards/df52575dd13c4eeb825ccf21374a31fb#p2=" +
                          dep +
                          "&p3=" +
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
                            handleChange("redes eléctricas");
                          }}
                        >
                          <a
                            className={
                              "button-item " +
                              (proyecto == "redes eléctricas" ? "active" : "")
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
                            handleChange("hidroeléctricas");
                          }}
                        >
                          <a
                            className={
                              "button-item " +
                              (proyecto == "hidroeléctricas" ? "active" : "")
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
                            handleChange("poliductos");
                          }}
                        >
                          <a
                            className={
                              "button-item " +
                              (proyecto == "poliductos" ? "active" : "")
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
                      <iframe src={"https://mercadostech.maps.arcgis.com/apps/dashboards/d47ba40f3dfc4940acd9916ed5fdd7c2#po2=" + dep} style={{width: '100%', height: '45%'}}>
                      </iframe>
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
                            handleChange("poliductos");
                          }}
                        >
                          <a
                            className={
                              "button-item " +
                              (proyecto == "poliductos" ? "active" : "")
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
                      <iframe src="https://mercadostech.maps.arcgis.com/apps/dashboards/d47ba40f3dfc4940acd9916ed5fdd7c2" style={{width: '100%', height: '45%'}}>
                      </iframe>
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
        </section>
      </div>
    </div>
  );
};
export default FiltrosPage;
