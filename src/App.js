import React from 'react';
import FadeIn from 'react-fade-in';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from './Components/Navigation/MainNav.js';
import HeaderAnimation from './Components/HeaderAnimation';
import Header from './Components/Header';
import About from './Components/About';
// import Languages from './Components/Languages';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      {/* <MainNav /> */}
      <Route exact path='/'>
        <FadeIn delay={300}>
          <div className='App'>
            <HeaderAnimation />
          </div>
          <Header />
        </FadeIn>
      </Route>

      <Route path='/about'>
        <FadeIn delay={200}>
          <About />
        </FadeIn>
      </Route>

      <Route path='/projects'>
        <FadeIn delay={200}>
          <Projects />
        </FadeIn>
      </Route>

      <Route path='/contact'>
        <FadeIn delay={200}>
          <Contact />
        </FadeIn>
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
