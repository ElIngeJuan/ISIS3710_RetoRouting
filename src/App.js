import './App.css';
import Mascota from './Mascota';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Detail from './Detail';
import Mascotas from './Mascotas';

function App() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setMascotas(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
        <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
