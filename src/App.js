import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ProfilePage from './Pages/Profile';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
