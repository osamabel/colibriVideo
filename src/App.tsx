import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Videos from './pages/Videos';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} /> Route for Video Page
      </Routes>
  );
}

export default App;
