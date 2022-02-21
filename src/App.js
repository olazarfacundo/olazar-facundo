import { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Presentacion from "./Components/Presentacion"
import Proyectos from "./Components/Proyectos"

function App() {

  const [ingles, setIngles] = useState(false)

  return (
    <div className='App'>
      <div>
        <Navbar toggleLanguage={() => setIngles(prev => !prev)}/>
        <Presentacion ingles={ingles}/>
      </div>
      <div>
        <Proyectos ingles={ingles}/>
      </div>
    </div>
  );
}

export default App;
