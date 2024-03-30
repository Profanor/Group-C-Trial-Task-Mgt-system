import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Mainpage from './components/MainPage/Mainpage';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Mainpage />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
