import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import Play from '../components/pages/play/Play';
import Bestiario from '../components/pages/bestiario/Bestiario';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/play" element={<Play/>} />
        <Route path="/bestiario" element={<Bestiario/>} />
      </Routes>
    </Router>
  );
}
