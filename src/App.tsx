import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './pages/Landing';
import './index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Landing />
      </div>
    </ThemeProvider>
  );
};

export default App;