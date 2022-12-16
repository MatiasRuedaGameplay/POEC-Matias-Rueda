
import ComponentHome from 'renderer/views/Home';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import img from "../../assets/images/elonmusk.jpg"
import Menus from './components/Menus';
import ComponentProfile from './views/Profile';


export default function App() {
  return (
    <div>
      <Menus />
      <Router>
      <Routes>
        <Route path="/" element={<ComponentHome title="Javier" image={img} />} />
        <Route path="/perfil" element={<ComponentProfile />} />
      </Routes>
    </Router>
    </div>
    
  );
}
