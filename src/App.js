import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports for v6
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import ArtistPage from './components/ArtistPage';
import VisitorPage from './components/VisitorPage';
import CuratorPage from './components/CuratorPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* In v6, you pass the component inside 'element' */}
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/visitor" element={<VisitorPage />} />
        <Route path="/curator" element={<CuratorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
