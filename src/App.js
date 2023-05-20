import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Publications from './components/Publications';
import Measure from './components/Measure';
import End from './components/End';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search/>
      <Publications/>
      <Measure/>
      <End/>
      <Footer/>
      
    </div>
  );
}

export default App;
