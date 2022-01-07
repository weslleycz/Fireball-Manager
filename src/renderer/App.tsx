import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Screen = () => {
  
  return (
    <>
      <Menu/>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen />} />
      </Routes>
    </Router>
  );
}
