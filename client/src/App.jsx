import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Mainpage from './components/MainPage/Mainpage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Mainpage />
      <Footer />
    </Router>
  );
};

export default App;
