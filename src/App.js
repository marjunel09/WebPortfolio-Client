import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
