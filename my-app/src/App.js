import React from "react";
import Main from "./Components/Main";
import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  const myStyle = {
    color: "aqua",
    fontFamily: "Cursive",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <>
      <Nav />
      <h1 style={myStyle}>DISCOVER AND WATCH ENDLESS AMAZING MOVIES!!</h1>
      <Main />
    </>
  );
}

export default App;
