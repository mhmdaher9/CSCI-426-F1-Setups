import '../Styles/Track.css';

// One circuit card. Receives a track object and a click handler as props.
function TrackItem({ track, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(track)}>
      <h3>{track.name}</h3>
      <small>{track.country} · {track.type}</small>
      <p>{track.summary}</p>
    </div>
  );
}

export default TrackItem;