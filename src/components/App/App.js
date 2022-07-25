import React from "react";
import Navbar from "../NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
       <Navbar/>
      </div>
    </Router>
  );
}

export default App;
