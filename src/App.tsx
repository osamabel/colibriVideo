import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Layout from './layout/Layout';
import Collection from './pages/Collection';
import Creators from './pages/Creators';
import Ressources from './pages/Ressources';
import Testimonial from './pages/Testimonial';
import About from './pages/About';
import Masterclass from './pages/Masterclass';
import Event from './pages/Event';
import Portrait from './pages/Portrait';
import Culture from './pages/Culture';
import Relations from './pages/Relations';
import Live from './pages/Live';
import Visite from './pages/Visite';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/creator" element={<Creators />} />
          <Route path="/resources" element={<Ressources />} />
          <Route path="/testimonialclient" element={<Testimonial />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/afterevent" element={<Event />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/relationspublics" element={<Relations />} />
          <Route path="/live" element={<Live />} />
          <Route path="/visiteguidee" element={<Visite />} />
        </Route>
      </Routes>
  );
}

export default App;
