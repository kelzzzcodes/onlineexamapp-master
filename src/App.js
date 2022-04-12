import React from 'react';
import './App.css';
import Header from './components/Header';
import Landingpage from './pages/Landingpage';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <Router>
    
    <div className="App">
        
        <Header/>
        <Routes>
        <Route path="/" element={<Landingpage />} />
        </Routes>
        
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
