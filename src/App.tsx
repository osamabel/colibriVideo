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
import Filmmaker from './pages/Filmmaker';
import Storyteller from './pages/Storyteller';
import Monteur from './pages/Monteur';
import Motiondesigner from './pages/Motiondesigner';
import Realisateur from './pages/Realisateur';
import Interviewer from './pages/Interviewer';
import Traducteur from './pages/Traducteur';
import Videosdestorytelling from './pages/Videosdestorytelling';
import Videospourlinkedin from './pages/Videospourlinkedin';
import Videospourledroit from './pages/Videospourledroit';
import Restaurateurs from './pages/Restaurateurs';

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
          <Route path="/filmmaker" element={<Filmmaker />} />
          <Route path="/storyteller" element={<Storyteller />} />
          <Route path="/monteur" element={<Monteur />} />
          <Route path="/motiondesigner" element={<Motiondesigner />} />
          <Route path="/realisateur" element={<Realisateur />} />
          <Route path="/interviewer" element={<Interviewer />} />
          <Route path="/traducteur" element={<Traducteur />} />
          <Route path="/videosdestorytelling" element={<Videosdestorytelling />} />
          <Route path="/videospourlinkedin" element={<Videospourlinkedin />} />
          <Route path="/videospourledroit" element={<Videospourledroit />} />
          <Route path="/videospourlesrestaurateurs" element={<Restaurateurs />} />
        </Route>
      </Routes>
  );
}

export default App;
