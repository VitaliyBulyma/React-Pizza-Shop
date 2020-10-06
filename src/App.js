import React from "react";
import { createGlobalStyle } from "styled-components";
import {Navbar} from './Navbar/Navbar';


const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

h1,h2,h3{
  font-family: 'Righteous', cursive;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <h1>Hello</h1>
      <div className="App">This is different font</div>
    </>
  );
}

export default App;
