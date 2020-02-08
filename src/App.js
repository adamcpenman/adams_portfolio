import React from 'react';

import HeaderAnimation from "./Components/HeaderAnimation"
import About from "./Components/About"
import Languages from "./Components/Languages"
import Projects from "./Components/Projects"
import styled from "styled-components"


function App() {
  return (
    <div>
    <div className="App">
    <HeaderAnimation/>
    </div>
   <Projects/>
    <About/>
    <Languages/>
    
    </div>

  );
}

export default App;
