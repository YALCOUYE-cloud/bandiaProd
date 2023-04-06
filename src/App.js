import './App.css';
import Home from './pages/Home';
import { Routes, Route} from "react-router-dom";
import Films from './pages/Films';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Header from './components/header/Header';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home   />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Films" element={<Films />} />
    <Route path="/Contact" element={<Contact />} />

    </Routes>
    
    </>
  );
};

export default App;
