import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/layout';
import Home from './pages/home/home';
import TiposEnergia from './pages/tiposEnergia';
import Equipamientos from './pages/SituacionEnergetica';
import Proyectos from './pages/Proyectos';
import Potencial from './pages/Potencial';
import FiltrosPage from './pages/Filtros/filtros';
import FiltrosPotencialPage from './pages/Filtros/potencialDepartamentos';
import '../src/components/page-tipe-1/styles.css';
import Mapas from './pages/mapas';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/tiposEnergia" Component={TiposEnergia} />
          <Route exact path="/mapas" Component={Mapas} />
          <Route exact path="/general" Component={Equipamientos} />
          <Route exact path="/proyectos" Component={Proyectos} />
          <Route exact path="/potencial" Component={Potencial} />
          <Route exact path="/filtros/:dep" Component={FiltrosPage} />
          <Route exact path="/potencialDepartamentos" Component={FiltrosPotencialPage} />
        </Routes>
      </Layout>


    </Router>

  );
}
export default App;