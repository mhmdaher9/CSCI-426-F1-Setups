import { useState } from 'react';
import TrackItem from '../Components/TrackItem';
import SetupDetail from './SetupDetail';
import '../Styles/Setups.css';

const filters = ['All', 'Low downforce', 'Medium downforce', 'High downforce'];

const glossary = [
  ['Front and rear wing', 'Angle of the wings sets downforce. More angle means more grip in corners and less top speed on straights.'],
  ['Ride height', 'Gap between the floor and the track. Lower is faster, until the car bottoms out and loses downforce.'],
  ['Brake bias', 'The share of braking force sent to the front axle. Moving it rearward helps the car rotate but risks locking the rears.'],
  ['Differential', 'Controls how the rear wheels share power. A tighter diff gives traction but makes the car harder to turn.'],
  ['Tyre pressure', 'Affects grip, wear and temperature. Higher pressure responds faster but overheats the centre of the tread.'],
  ['Camber', 'Tilt of the wheel. Negative camber puts more tyre on the road in corners but wears the inside edge.'],
];

function Setups({ tracks }) {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const shown = tracks.filter(t => (filter === 'All' || t.type === filter) && t.name.toLowerCase().includes(query.toLowerCase()));

  if (selected) return <SetupDetail track={selected} onBack={() => setSelected(null)} />;

  return (
    <section className="wrap">
      <h1>Track setups</h1>
      <div className="controls">
        <input type="search" placeholder="Search a circuit" aria-label="Search a circuit" value={query} onChange={e => setQuery(e.target.value)} />
        <div className="chips">{filters.map(f => <button key={f} className={f === filter ? 'on' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
      </div>
      <div className="grid">
        {shown.map(t => <TrackItem key={t.id} track={t} onSelect={setSelected} />)}
      </div>
      {shown.length === 0 && <p>No circuits match. Clear the search or pick "All".</p>}
      <h2>Setup glossary</h2>
      <dl className="glossary">{glossary.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
    </section>
  );
}

export default Setups;