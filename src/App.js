// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterGallery from './CharacterGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterGallery />} />
        <Route path="/character1" element={<div>Character 1 Page</div>} />
        <Route path="/character2" element={<div>Character 2 Page</div>} />
        <Route path="/character3" element={<div>Character 3 Page</div>} />
        <Route path="/character4" element={<div>Character 4 Page</div>} />
        <Route path="/character5" element={<div>Character 5 Page</div>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
