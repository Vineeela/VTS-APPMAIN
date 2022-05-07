
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Sidebar from './components/sidebar/Sidebar';
import Vehicle from './pages/Vehicle';

function App() {
  return (
    <div>
      <div >
        <Sidebar />
      </div>
      <div className="contents">
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/vehicle' element={<Vehicle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
