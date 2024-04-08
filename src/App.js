import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ProfilePage from './Pages/Profile';
import Homepage from './Pages/Homepage';
import Forum from './Pages/Forums'
import CreateForum from './Pages/CreateForums'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/create-forum" element={<CreateForum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
