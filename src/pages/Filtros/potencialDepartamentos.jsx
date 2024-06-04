import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
const FiltrosPotencialPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [proyecto, setProyecto] = useState("");

  const handleChange = (selected) => {
    let proyecto = "";
    for (let option of selected) {
      proyecto += option.value + ",";
    }
    proyecto = proyecto.slice(0, -1);
    setSelectedOptions(selected);
    setProyecto(proyecto);
  };

  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");

  const options = [
    { value: "SOLAR", label: "POTENCIAL ENERGÉTICO SOLAR" },
    { value: "EOLICA", label: "POTENCIAL ENERGÉTICO EÓLICO" },
    { value: "BIOMASA", label: "POTENCIAL ENERGÉTICO POR BIOMASA" },
  ];

  const onChange = (event) => {
    const value = event.target.value;
    setDepartamento(value);
    setMunicipio("");
  };

  const onChange2 = (event) => {
    const value = event.target.value;
    setMunicipio(value);
  };

  useEffect(() => {}, [departamento, municipio, proyecto]);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Potencial energético
          </h4>
        </div>
        <div id="filtersSection">
          <select
            className="form-select filter-select"
            aria-label="Default select example"
            onChange={onChange}
          >
            <option selected value="">
              SELECCIONE UN DEPARTAMENTO
            </option>
            <option value="8">ATLÁNTICO</option>
            <option value="13">BOLÍVAR</option>
            <option value="20">CESAR</option>
            <option value="23">CÓRDOBA</option>
            <option value="44">LA GUAJIRA</option>
            <option value="47">MAGDALENA</option>
            <option value="70">SUCRE</option>
            <option value="88">
              ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA
            </option>
          </select>
          {departamento == "" && (
            <select
              className="form-select filter-select"
              aria-label="Default select example"
              onChange={onChange2}
            >
              <option disabled selected value="">
                SELECCIONE UN DEPARTAMENTO
              </option>
            </select>
          )}
          {departamento == "8" && (
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
          {departamento == "13" && (
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
          {departamento == "20" && (
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
          {departamento == "23" && (
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
          {departamento == "44" && (
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
          {departamento == "47" && (
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
          {departamento == "70" && (
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

          <Select
            className="filter-select"
            isMulti
            value={selectedOptions}
            onChange={handleChange}
            options={options}
            placeholder="SELECCIONE LOS POTENCIALES"
          />
        </div>
        <br />
        <section className="content_section2">
          <>
            {departamento ? (
              <>
                {municipio ? (
                  <>
                    <div className="filterMap">
                      <iframe
                        src={
                          "https://mercadostech.maps.arcgis.com/apps/dashboards/dd0f5bc8bca643d2b93de4af8bbaa8a7#div=" +
                          municipio +
                          "&capas=" +
                          proyecto
                        }
                        className="content_full_page2"
                        style={{ width: "100%" }}
                      ></iframe>
                    </div>
                    <div className="filterStats">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi ea, inventore quos accusantium culpa aliquid
                        fugiat itaque nulla tempore alias? Eius illo accusamus
                        reprehenderit perspiciatis recusandae officiis, omnis
                        est repellendus.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="filterMap">
                      <iframe
                        src={
                          "https://mercadostech.maps.arcgis.com/apps/dashboards/dd0f5bc8bca643d2b93de4af8bbaa8a7#depto=" +
                          departamento +
                          "&capas=" +
                          proyecto
                        }
                        className="content_full_page2"
                        style={{ width: "100%" }}
                      ></iframe>
                    </div>
                    <div className="filterStats">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi ea, inventore quos accusantium culpa aliquid
                        fugiat itaque nulla tempore alias? Eius illo accusamus
                        reprehenderit perspiciatis recusandae officiis, omnis
                        est repellendus.
                      </p>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="filterMap">
                  <iframe
                    src={
                      "https://mercadostech.maps.arcgis.com/apps/dashboards/dd0f5bc8bca643d2b93de4af8bbaa8a7#capas=" +
                      proyecto
                    }
                    className="content_full_page2"
                    style={{ width: "100%" }}
                  ></iframe>
                </div>
                <div className="filterStats">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ea, inventore quos accusantium culpa aliquid fugiat
                    itaque nulla tempore alias? Eius illo accusamus
                    reprehenderit perspiciatis recusandae officiis, omnis est
                    repellendus.
                  </p>
                </div>
              </>
            )}
          </>
        </section>
      </div>
    </div>
  );
};
export default FiltrosPotencialPage;
