import "./multimedia.css";
const Multimedia = () => {
  return (
    <>
      <h3>Galería</h3>
      <div className="gallery-container">
        <div>
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://www.enelgreenpower.com/content/dam/enel-egp/immagini/articoli/storie/record-enel-luigi-la-pegna_1_2400x1160.jpg')",
              backgroundSize: "cover",
            }}
          ></div>
          <span style={{fontSize: '9px', textAlign: 'center'}}><i>La empresa Enel Green Power fue la encargada del megaproyecto que tiene una capacidad de 187 megavatios y una generación media de 420 GWh/año y se consolida como el más grande del país</i></span>
        </div>
        <div>
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://regioncaribe.com.co/wp-content/uploads/2022/03/Primer-Parque-Eolico-marino-de-Latinoamerica-se-construira-en-Barranquilla.jpg')",
              backgroundSize: "cover",
            }}
          ></div>
          <span style={{fontSize: '9px', textAlign: 'center'}}><i>Ecopetrol inauguró el primer parque eólico marino que hay en Colombia, se encuentra ubicado en La Guajira y ya comenzó a aportar energía a la red eléctrica nacional.</i></span>
        </div>
        <div>
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://www.portafolio.co/files/article_new_multimedia/uploads/2021/06/28/60d9cc986f218.jpeg')",
              backgroundSize: "cover",
            }}
          ></div>
          <span style={{fontSize: '9px', textAlign: 'center'}}><i>Con la entrada de operación de esta nueva mina del Cerrejón se espera que se aumente la producción en un 30% este año.</i></span>
        </div>
        <div>
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://www.wradio.com.co/resizer/v2/CEMTCNBUU5EVFD5ZZRP2YK66KQ.jpg?auth=fa0db46d92ccc5a9d664da81b9cd2a7a161955187eeba92ea771ef1b958b4f77&width=768&height=576&quality=70&smart=true')",
              backgroundSize: "cover",
            }}
          ></div>
          <span style={{fontSize: '9px', textAlign: 'center'}}><i>Así se encuentra el embalse de Urrá en Córdoba, tras fuerte sequía que impacta al departamento. Directivas dicen que está garantizado el suministro de energía.</i></span>
        </div>
      </div>
    </>
  );
};

export default Multimedia;
