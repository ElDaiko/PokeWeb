import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page from "./components/Page"
import Pokedex from "./components/Pokedex"
import PokeDB from "./components/PokeDB";
import Api from "./components/Api";

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
          <Page/>
        }/>
        <Route path="/pokedex"
        element={
          <PokeDB/>
        }/>
        <Route path="/signin"
        element={
          <Api/>
        }/>
      </Routes>
    </Router>
    
  );
}

export default App;
