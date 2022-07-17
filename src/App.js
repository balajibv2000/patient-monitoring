import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CriticalPatients from './components/CriticalPatients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Patient Monitoring System</h1>
        <Link to="/critical">Critcal Patients</Link>

        <Routes>
          <Route path="/critical" element={<CriticalPatients />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
