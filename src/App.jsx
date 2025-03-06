import './App.css';
import Pag1 from './pages/Pag1';
import Card from './components/Card.jsx'
import Pag2 from './pages/Pag2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Pag1 />} />
          <Route path="/card" element={<Card />} />
          <Route path="/pag2" element={<Pag2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
