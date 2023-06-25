import React from "react";
import { Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
function App() {
  
  return (
    <div className="App">
    
      <div className="main">
        <Navbar/>
        <Home/>
      </div>
     
    </div>
  )
}

export default App
