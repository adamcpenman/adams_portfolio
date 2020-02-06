import React from 'react';

import HeaderAnimation from "./Components/HeaderAnimation"
import About from "./Components/About"
import Languages from "./Components/Languages"

import styled from "styled-components"


function App() {
  return (
    <div>
    <div className="App">
    <HeaderAnimation/>
    </div>
   
    <About/>
    <Languages/>
    
    </div>

  );
}

export default App;
