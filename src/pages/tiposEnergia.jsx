import { Link } from "react-router-dom";

const TiposEnergia = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Tipos de energía
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <Link style={{ textDecoration: "none" }} to="/energia/hidrocarburos">
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid mb-3 mb-sm-0"
                      src="https://concepto.de/wp-content/uploads/2020/04/hidrocarburos-petroleo-e1588003317623.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <h4>
                      <i className="fa fa-bolt service-icon"></i>Hidrocarburos
                    </h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo. Guberg
                      sea et et lorem dolor sed est sit invidunt, dolore tempor
                      diam ipsum takima erat tempor
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5">
              <Link style={{ textDecoration: "none" }} to="/energia/redes_electricas">
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid mb-3 mb-sm-0"
                      src="https://twenergy.com/wp-content/uploads/2019/06/red-distribucion-electrica.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <h4>
                      <i className="fa fa-bolt service-icon"></i>Redes eléctricas
                    </h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo. Guberg
                      sea et et lorem dolor sed est sit invidunt, dolore tempor
                      diam ipsum takima erat tempor
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5">
              <Link style={{ textDecoration: "none" }} to="/energia/hidroelectricas">
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid mb-3 mb-sm-0"
                      src="https://www.foronuclear.org/wp-content/uploads/2010/06/central-hidroelectrica.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <h4>
                      <i className="fa fa-bolt service-icon"></i>Hidroeléctricas
                    </h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo. Guberg
                      sea et et lorem dolor sed est sit invidunt, dolore tempor
                      diam ipsum takima erat tempor
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-5">
              <Link style={{ textDecoration: "none" }} to="/energia/poliductos">
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid mb-3 mb-sm-0"
                      src="https://www.sulzer.com/spain/-/media/images/applications/oil-gas-chemicals/midstream/pipeline/refined_products_pipeline_121174759.jpg?mw=827&la=es-es&hash=D06717C36C95384DD045431DC52346F3"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <h4>
                      <i className="fa fa-bolt service-icon"></i>Poliductos
                    </h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo. Guberg
                      sea et et lorem dolor sed est sit invidunt, dolore tempor
                      diam ipsum takima erat tempor
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiposEnergia;
