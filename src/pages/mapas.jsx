import React, { useState} from 'react';

import "./home/home.css";
const Mapas = () => {

    const [mapa, setMapa] = useState("general");


    const onChange = (event) => {
        const value = event.target.value;
        setMapa(value);
    };

    return (
        <div className="page_t1">
            <section className='title_section'>
                <h2 className='title_page'>Mapas (Galeria)
                </h2>
            </section>
            <select className="form-select filter-select" aria-label="Default select example" onChange={onChange}>
                <option selected value="general">General</option>
                <option value="proyectos">Proyectos</option>
                <option value="potencial">Potencial</option>
            </select>


            {mapa == "general" && (<>
                <h3 className='title_page'>General</h3>
                <section className='content_section'>
                    <iframe src={"https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=25c1dd00a01e4e859ec719d044b3f183"} className='content_full_page'></iframe>
                </section>
            </>)}

            {mapa == "proyectos" && (<>
                <h3 className='title_page'>Proyectos</h3>
                <section className='content_section'>
                    <iframe src={"https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=be1f986a61d747d8a00dda5599ba8602"} className='content_full_page'></iframe>
                </section>
            </>)}

            {mapa == "potencial" && (<>
                <h3 className='title_page'>Potencial</h3>
                <section className='content_section'>
                    <iframe src={"https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=ed9e49bc595840428e4b5cd043721793"} className='content_full_page'></iframe>
                </section>
            </>)}
        </div>
    )
}
export default Mapas;