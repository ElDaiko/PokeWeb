import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Companion from "./components/Companion"
import Pokedex from "./components/Pokedex"
import PokeDB from "./components/PokeDB";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from "./components/Signin";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"
        element={
          <PokeDB/>
        }/>
        <Route path="/companion"
        element={
          <p>hi</p>
        }/>
        <Route path="/pokedex"
        element={
          <Pokedex/>
        }/>
        <Route path="/signin"
        element={
          <Signin/>
        }/>
      </Routes>
    </Router>
    
  );
}

export default App;
