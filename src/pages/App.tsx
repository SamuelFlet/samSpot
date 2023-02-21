import React from 'react';
import {Outlet} from "react-router-dom"
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <div><Outlet /></div>
    </div>
  );
}

export default App;
