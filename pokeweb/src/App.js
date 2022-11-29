import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page from "./components/Page"
import Pokedex from "./components/Pokedex"
import PokeDB from "./components/PokeDB";
import Api from "./components/Api";
import UserContext from "./components/context/userContext";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from "./components/Signin";



function App() {
  const [user, setUser] = useState("")
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"
            element={
              <Page />
            } />
          <Route path="/pokedex"
            element={
              <PokeDB />
            } />
          <Route path="/signin"
            element={
              <Api />
            } />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
