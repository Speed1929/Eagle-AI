import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import UploadFace from './components/UploadFace';
import LiveFaceDetection from './components/LiveFaceDetection';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload-face" element={<UploadFace />} />
      <Route path="/live-face" element={<LiveFaceDetection />} />
    </Routes>
  );
};

export default App;

