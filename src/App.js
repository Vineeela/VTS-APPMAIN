
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Sidebar from './components/sidebar/Sidebar';
import Vehicle from './pages/Vehicle';
import Trails from './pages/Trails';

function App() {
  return (
    <div className='main'>
        <Sidebar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/vehicle' element={<Vehicle />} />
          <Route path='/trails' element={<Trails/>} />
        </Routes>
      </div>
    </div>



  );
}

export default App;
