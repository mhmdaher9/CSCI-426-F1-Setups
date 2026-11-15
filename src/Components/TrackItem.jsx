import { Link } from 'react-router-dom';
import '../Styles/Track.css';

// One circuit card. Receives a single track object as a prop.
function TrackItem({ track }) {
  return (
    <Link to={`/setups/${track.id}`} className="card">
      <h3>{track.name}</h3>
      <small>{track.country} · {track.type}</small>
      <p>{track.summary}</p>
    </Link>
  );
}

export default TrackItem;
