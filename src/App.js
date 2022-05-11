
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Sidebar from './components/sidebar/Sidebar';
import Vehicle from './pages/Vehicle';
import Trails from './pages/Trails';
import Reports from './pages/Reports';
import Panic from './pages/Panic';
import { Container, Col, Row } from 'react-bootstrap';
import NavbarVts from './components/navbar/NavbarVts';


function App() {
  return (
    <div className='row' >
      <div className="leftnav col-md-2">
        <Sidebar />
      </div>
      
      <div className="col-md-10" >
          <NavbarVts />
          <Routes>
            <Route path='/' exact element={<Overview />} />
            <Route path='/vehicle' exact element={<Vehicle />} />
            <Route path='/trails' exact element={<Trails />} />
            <Route path='/reports' exact element={<Reports />} />
            <Route path='/panic' exact element={<Panic />} />
          </Routes>
        
      </div>
    </div >



  );
}

export default App;
