import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeriodicPatients from './components/PeriodicPatients';
import MidcriticalPatients from './components/MidcriticalPatients';
import ICU from './components/ICU';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/periodic" element={<PeriodicPatients />} />
          <Route path="/mid-critical" element={<MidcriticalPatients />} />
          <Route path="/icu" element={<ICU />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
