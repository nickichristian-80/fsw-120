import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import './App.css';




function App() {
  return (
    //BEM
    <div className="app">
      {/*Sidebar*/}
      <Sidebar />

      {/*Home Feed*/}
      <Feed />

      {/*Widgets Far Right*/}
      <Widgets />
      
    </div>
  );
}

export default App;
