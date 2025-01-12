import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate('/upload-face')}>Upload Face</button>
      <button onClick={() => navigate('/live-face')}>Live Face Detection</button>
    </div>
  );
};

export default Dashboard;
