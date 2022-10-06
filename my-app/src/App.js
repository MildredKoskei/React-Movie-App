import React from 'react'
import Main from './Components/Main'


function App() {
  const myStyle = {
    color: "white",
    font: "italic",
    align: "centre"
  };
  return (
    <>
    <h1 style = {myStyle}>DISCOVER AND WATCH ENDLESS AMAZING MOVIES!!</h1>
    <Main />
    </>
  )
}

export default App