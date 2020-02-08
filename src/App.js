import React from 'react';

import HeaderAnimation from "./Components/HeaderAnimation"
import About from "./Components/About"
import Languages from "./Components/Languages"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
import styled from "styled-components"


function App() {
  return (
    <div>
    <div className="App">
    <HeaderAnimation/>
    </div>
    <About/>
    <Languages/>
    <Projects/>
    <Footer/>
    </div>

  );
}

export default App;
