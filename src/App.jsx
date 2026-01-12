import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

export default function App() {
  
  return (
    <>
      <Router>
        <Loader />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
