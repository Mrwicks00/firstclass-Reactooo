import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Body from './components/Body';
import Greet from './components/Greet';


const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Greet></Greet>
        <Footer />
        <Body />
      </div>
    </div>
  )
}

export default App