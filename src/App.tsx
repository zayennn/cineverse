import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './pages/Landing';
import FilmDescription from './pages/FilmDescription';
import './index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movie/:id" element={<FilmDescription />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;