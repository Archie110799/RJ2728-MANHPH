import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IMAGES } from "./assets/images/images";

function App() {
  let styles = { 
    width: 100, 
    color: "red",
    backgroundColor:'red'
  };
  return (
    <div>
      <h1 style={styles}></h1>
      <h1></h1>
      <img src={IMAGES.LOGO}/>
    </div>
  );
}

export default App;
