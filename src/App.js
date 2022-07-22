import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeriodicPatients from './components/PeriodicPatients';
import MidcriticalPatients from './components/MidcriticalPatients';
import CriticalPatients from './components/CriticalPatients';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div class="background-image">
      
      <BrowserRouter>
    
        <Navbar />
        

        <Routes>
          <Route path="/periodic" element={<PeriodicPatients />} />
          <Route path="/mid-critical" element={<MidcriticalPatients />} />
          <Route path="/critical" element={<CriticalPatients />} />
        </Routes>

      </BrowserRouter>
    
    </div>
    </div>
  );
}

export default App;
