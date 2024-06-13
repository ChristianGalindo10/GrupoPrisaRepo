import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/layout';
import Home from './pages/home/home';
import FiltrosPage from './pages/Filtros/filtros';
import FiltrosPotencialPage from './pages/Filtros/potencialDepartamentos';
import Mapas from './pages/mapas';
import DepartamentosPage from './pages/departamentos';
import energiaCaribe from './pages/Filtros/energiaCaribe';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/mapas/:map" Component={Mapas} />
          <Route exact path="/departamentos" Component={DepartamentosPage} />
          <Route exact path="/filtros/:dep" Component={FiltrosPage} />
          <Route exact path="/filtros" Component={FiltrosPage} />
          <Route exact path="/energia/:energia" Component={energiaCaribe} />
          <Route exact path="/potencialDepartamentos" Component={FiltrosPotencialPage} />
        </Routes>
      </Layout>


    </Router>

  );
}
export default App;