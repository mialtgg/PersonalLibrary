import Home from "./components/Pages.js/Home";
import React from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  );
}

export default App;
