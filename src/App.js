import React from 'react';
import FadeIn from 'react-fade-in';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNav from './Components/Navigation/MainNav.js';
import HeaderAnimation from './Components/HeaderAnimation';
import Header from './Components/Header';
import About from './Components/About';
import Languages from './Components/Languages';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <MainNav />
      <Route exact path='/'>
        <FadeIn delay={500}>
          <div className='App'>
            <HeaderAnimation />
          </div>
          <Header />
        </FadeIn>
      </Route>
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      {/* <FadeIn delay={1500} transitionDuration={4000}>
        <About />
        <Languages />
      </FadeIn>

      <Projects />
      <Contact />*/}
      <Footer />
    </Router>
  );
}

export default App;
