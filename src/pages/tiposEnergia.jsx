import React from 'react';
import "./home/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lanzadores from '../components/lanzadores/lanzadores';
import Noticias from '../components/noticias/noticias';
import Multimedia from '../components/multimedia/multimedia';

const TiposEnergia = () => {

    return (
        <div className='containerGeneral'>
            <h1 className='sectionTitle'>
                Tipos de Energía
            </h1>
            <div className="home-content2">
                <div className="home-content-text">
                    <h2>
                        Renovable
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sed error. Accusantium facere voluptatem pariatur
                        totam blanditiis. Placeat praesentium est ea quam ut delectus quasi quisquam
                        fuga aliquid, iusto iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptates sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
                        eatae voluptate commodi, corrupti tempora sit iusto minus. Ducimus, magnam corrupti!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sed error. Accusantium facere voluptatem pariatur
                        totam blanditiis. Placeat praesentium est ea quam ut delectus quasi quisquam
                        fuga aliquid, iusto iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptates sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
                        eatae voluptate commodi, corrupti tempora sit iusto minus. Ducimus, magnam corrupti!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sed error. Accusantium facere voluptatem pariatur
                        totam blanditiis. Placeat praesentium est ea quam ut delectus quasi quisquam
                        fuga aliquid, iusto iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptates sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
                        eatae voluptate commodi, corrupti tempora sit iusto minus. Ducimus, magnam corrupti!</p>
                </div>
                <div className="home-content-text">
                    <h2>
                        No renovable
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sed error. Accusantium facere voluptatem pariatur
                        totam blanditiis. Placeat praesentium est ea quam ut delectus quasi quisquam
                        fuga aliquid, iusto iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptates sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
                        eatae voluptate commodi, corrupti tempora sit iusto minus. Ducimus, magnam corrupti!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sed error. Accusantium facere voluptatem pariatur
                        totam blanditiis. Placeat praesentium est ea quam ut delectus quasi quisquam
                        fuga aliquid, iusto iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptates sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
                        eatae voluptate commodi, corrupti tempora sit iusto minus. Ducimus, magnam corrupti!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sed error. Accusantium facere voluptatem pariatur
                        totam blanditiis. Placeat praesentium est ea quam ut delectus quasi quisquam
                        fuga aliquid, iusto iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptates sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
                        eatae voluptate commodi, corrupti tempora sit iusto minus. Ducimus, magnam corrupti!</p>
                </div>
            </div>
            <Noticias />
            <br />
            <Multimedia />
            <br />
            <div>
            <h2>¿Quiénes somos?</h2>
            <br />
            <div style={{ position: 'relative', display: 'flex',flexDirection: 'column'}}>
                <iframe width="914" height="514" src="https://www.youtube.com/embed/DMAgQRAYGjA"
                    title="PRISA Vídeo Corporativo 2021" frameborder="0" allow="accelerometer; autoplay;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowFullScreen style={{margin: '0 auto', 
                    width: '100%', maxWidth: '914px', height: '50vw', maxHeight: '514px'}}></iframe>
            </div>
            <br />
            <p>PRISA es el grupo empresarial líder en la creación y distribución de contenidos educativos,
                de información y entretenimiento en el mercado de habla hispana. Presente en 23 países, PRISA
                llega a millones de personas a través de sus marcas globales: Santillana, EL PAÍS, LOS40, W
                Radio o AS. PRISA es uno de los principales grupos de educación y medios de comunicación del
                mundo hispano por la gran calidad de sus contenidos y por su voluntad de participar en la economía
                digital a través de la conectividad y la innovación en productos y servicios. Su presencia en Brasil
                y Portugal, y en el creciente mercado hispano de EEUU, le abre un mercado global de más de 700 millones
                de personas.</p>

            <p>PRISA es uno de los principales grupos de educación y medios de comunicación gracias a la
                calidad de sus contenidos y a su espíritu innovador.</p>

            <p>Con 240 millones de usuarios únicos mensuales* en todo el mundo,
                PRISA se sitúa a la vanguardia de las empresas de comunicación y
                educación con una sólida estrategia de distribución de contenidos, y
                ofrece innovadoras propuestas a través de distintos formatos, canales y plataformas.</p>

            <p>* (Fuente: Adobe Omniture enero-diciembre 2020)</p>
            </div>
            <br />
            <Lanzadores />
        </div>
    );
};
export default TiposEnergia;
