import "./App.css"
import Main from '../pages/Main/Main';
import PokemonInfo from "../pages/PokemonInfo/PokemonInfo";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="pokemon/:name" element={<PokemonInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
