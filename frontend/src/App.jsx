import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import fullLogo from "./assets/Full_Logo.jpg"
import LandingPage from './components/LandingPage' 
import Layout from './Layout';
import Contact from './components/Contact';
import Questionnaire from './components/Questionnaire';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="questionnaire" element={<Questionnaire />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
