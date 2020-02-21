import React from 'react';
import FadeIn from 'react-fade-in';

import HeaderAnimation from "./Components/HeaderAnimation"
import Header from "./Components/Header"
import About from "./Components/About"
import Languages from "./Components/Languages"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"



function App() {

  return (
    <>
      <FadeIn delay={500}>
        <div className="App">
          <HeaderAnimation />
         </div>
         <Header/>
      </FadeIn>
       
      <FadeIn delay={1500} transitionDuration={4000}>
        <About />
        <Languages />
      </FadeIn>
    
        <Projects />
        <Footer />
      
      
    </>
  );
}

export default App;
