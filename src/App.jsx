import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
         </div>
  );
}

export default App;

