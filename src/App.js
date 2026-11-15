import './App.css';
import './Styles/styles.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Setups from './Pages/Setups';
import SetupDetail from './Pages/SetupDetail';
import About from './Pages/About';
import Contact from './Pages/Contact';


const tracks = [
  {
    id: 'monza', name: 'Monza', country: 'Italy', type: 'Low downforce', wing: [2, 1], ride: [28, 55], bias: 57.5, diff: 70, psi: [22.5, 20.5], camber: [-2.8, -1.4],
    summary: 'The Temple of Speed rewards straight-line speed above all else.',
    why: 'Long straights and heavy braking into chicanes. Wings are trimmed flat, and the car runs stiff and low to keep the floor working over the kerbs.'
  },
  {
    id: 'monaco', name: 'Monaco', country: 'Monaco', type: 'High downforce', wing: [10, 10], ride: [34, 62], bias: 54.5, diff: 55, psi: [21.5, 19.5], camber: [-3.3, -1.8],
    summary: 'Walls on both sides and almost no overtaking: grip and rotation win.',
    why: 'Maximum wing for slow corners, soft springs for the bumps, and a lot of steering lock. Qualifying position matters more than top speed.'
  },
  {
    id: 'spa', name: 'Spa-Francorchamps', country: 'Belgium', type: 'Medium downforce', wing: [5, 4], ride: [30, 58], bias: 56, diff: 65, psi: [23.0, 21.0], camber: [-3.0, -1.6],
    summary: 'Fast sweeps in Sector 2 and a long run up Kemmel in Sector 1.',
    why: 'A compromise: enough downforce for Eau Rouge and Blanchimont, enough trim to stay fast on the straights. Tyre pressure runs high because of the load.'
  },
  {
    id: 'silverstone', name: 'Silverstone', country: 'United Kingdom', type: 'Medium downforce', wing: [6, 6], ride: [30, 59], bias: 55.5, diff: 62, psi: [23.5, 21.5], camber: [-3.1, -1.7],
    summary: 'High-speed direction changes at Maggotts, Becketts and Chapel.',
    why: 'Stability in fast corners comes first, and long loaded corners work the tyres hard, so camber and pressure are managed carefully.'
  },
  {
    id: 'suzuka', name: 'Suzuka', country: 'Japan', type: 'Medium downforce', wing: [7, 7], ride: [31, 60], bias: 55, diff: 60, psi: [23.0, 21.0], camber: [-3.2, -1.8],
    summary: 'The figure-eight layout needs a balanced, responsive car.',
    why: 'The Esses demand quick turn-in. A slightly stiffer front end helps, and the rear wing keeps the car calm through 130R.'
  },
  {
    id: 'singapore', name: 'Marina Bay', country: 'Singapore', type: 'High downforce', wing: [9, 9], ride: [33, 62], bias: 54, diff: 52, psi: [21.0, 19.0], camber: [-3.4, -1.9],
    summary: 'Hot, humid, bumpy and slow: a night-time endurance test.',
    why: 'Lots of wing and traction out of 90-degree corners. Brake bias moves forward and cooling ducts open up to survive the heat.'
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setups" element={<Setups tracks={tracks} />} />
          <Route path="/setups/:id" element={<SetupDetail tracks={tracks} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
