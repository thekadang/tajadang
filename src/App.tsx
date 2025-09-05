import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import StepPage from './components/StepPage';
import ProtectedAdminRoute from './components/ProtectedAdminRoute/ProtectedAdminRoute';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/step/:stepId" element={<StepPage />} />
          <Route path="/admin" element={<ProtectedAdminRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
