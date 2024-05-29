import "./lanzadores.css";
import mapa from "../../assets/icons/Consolidado.png";
import potencial from "../../assets/icons/potencial.png";
import potencialDep from "../../assets/icons/potencialDepartamentos.png";
import { Link } from 'react-router-dom';
const Lanzadores = () => {
    return (
        <>
            <h2 style={{ fontWeight: 'bolder' }}>Lanzadores Mapas</h2>
            <br />
            <h2>Caribe (Consolidado)</h2>
            <div className='lanzadores-container'>
                <Link style={{ color: null, padding: 0, height: 'auto', margin: null, width: null, textDecoration: 'none', color: 'inherit' }} to={'/proyectos'}>
                    <div className="lanzadores-item" >
                        <img src={mapa} />
                        <h3>Proyectos</h3>
                    </div>
                </Link>
                <Link style={{ color: null, padding: 0, height: 'auto', margin: null, width: null, textDecoration: 'none', color: 'inherit' }} to={'/potencial'}>
                    <div className="lanzadores-item">
                        <img src={potencial} />
                        <h3>Potencial</h3>
                    </div>
                </Link>
            </div>
            <h2>Departamentos</h2>
            <div className='lanzadores-container'>
                <Link style={{ color: null, padding: 0, height: 'auto', margin: null, width: null, textDecoration: 'none', color: 'inherit' }} to={'/filtros'}>
                    <div className="lanzadores-item" >
                        <img src={mapa} />
                        <h3>Proyectos</h3>
                    </div>
                </Link>
                <Link style={{ color: null, padding: 0, height: 'auto', margin: null, width: null, textDecoration: 'none', color: 'inherit' }} to={'/potencialDepartamentos'}>
                    <div className="lanzadores-item">
                        <img src={potencialDep} />
                        <h3>Potencial</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Lanzadores;