import { NavLink } from "react-router-dom";
import "./departamentos.css";

import atlantico from "../../assets/icons/ATLÁNTICO-100 1.jpg";
import cartagena from "../../assets/icons/Cartagena-100.jpg";
import cordoba from "../../assets/icons/Cordoba.png";
import guajira from "../../assets/icons/Guajira-100.jpg";
import sanAndres from "../../assets/icons/San Andrés.png";
import santaMarta from "../../assets/icons/Santa Marta-100.jpg";
import sincelejo from "../../assets/icons/Sincelejo.png";
import valledupar from "../../assets/icons/Vallledupar.png";

const Departamentos = () => {
    return(
        <div id="departamentos-section">
          <h3 className="sectionTitle">Las energías en los departamentos</h3>
          <div id="carouselExample" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="col-md-3">
                  <NavLink to="/filtros/8">
                    <div class="card">
                      <img
                        class="card-img"
                        src={atlantico}
                        alt="ATLÁNTICO"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">ATLÁNTICO</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/13">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cartagena}
                        alt="BOLÍVAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">BOLÍVAR</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/20">
                    <div class="card">
                      <img
                        class="card-img"
                        src={valledupar}
                        alt="CESAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">CESAR</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/23">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cordoba}
                        alt="CÓRDOBA"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">CÓRDOBA</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/44">
                    <div class="card">
                      <img
                        class="card-img"
                        src={guajira}
                        alt="ATLÁNTICO"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">LA GUAJIRA</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/47">
                    <div class="card">
                      <img
                        class="card-img"
                        src={santaMarta}
                        alt="BOLÍVAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">MAGDALENA</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/70">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sincelejo}
                        alt="CESAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">SUCRE</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/88">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sanAndres}
                        alt="CÓRDOBA"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          ARCHIPIÉLAGO DE SAN ANDRÉS Y PROVIDENCIA
                        </h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExample"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExample"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
          <div
            id="carouselExample2"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="col-md-3">
                  <NavLink to="/filtros/8">
                    <div class="card">
                      <img
                        class="card-img"
                        src={atlantico}
                        alt="ATLÁNTICO"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">ATLÁNTICO</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/13">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cartagena}
                        alt="BOLÍVAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">BOLÍVAR</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/20">
                    <div class="card">
                      <img
                        class="card-img"
                        src={valledupar}
                        alt="CESAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">CESAR</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/23">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cordoba}
                        alt="CÓRDOBA"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">CÓRDOBA</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/44">
                    <div class="card">
                      <img
                        class="card-img"
                        src={guajira}
                        alt="ATLÁNTICO"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">LA GUAJIRA</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="col-md-3">
                  <NavLink to="/filtros/47">
                    <div class="card">
                      <img
                        class="card-img"
                        src={santaMarta}
                        alt="BOLÍVAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">MAGDALENA</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/70">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sincelejo}
                        alt="CESAR"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">SUCRE</h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/88">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sanAndres}
                        alt="CÓRDOBA"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          ARCHIPIÉLAGO DE SAN ANDRÉS Y PROVIDENCIA
                        </h5>
                        
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExample2"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExample2"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
        </div>
    )
}

export default Departamentos;