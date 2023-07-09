import React from "react";
import { Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import Routing from "./Routing/Routing";
function App() {
  
  return (
    <div className="App">
    
      <div className="main">
        <Navbar/>
        
        <Routing/>
      </div>
     
    </div>
  )
}

export default App
