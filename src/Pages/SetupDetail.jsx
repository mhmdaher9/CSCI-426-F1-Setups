function SetupDetail({ track, onBack }) {
  const rows = [
    ['Front wing', `${track.wing[0]} / 10`],
    ['Rear wing', `${track.wing[1]} / 10`],
    ['Ride height (F / R)', `${track.ride[0]} / ${track.ride[1]} mm`],
    ['Brake bias', `${track.bias}% front`],
    ['Differential (on-throttle)', `${track.diff}%`],
    ['Tyre pressure (F / R)', `${track.psi[0]} / ${track.psi[1]} psi`],
    ['Camber (F / R)', `${track.camber[0]}° / ${track.camber[1]}°`],
  ];
  return (
    <section className="wrap">
      <button className="btn" onClick={onBack}>← Back to all setups</button>
      <h1>{track.name} <small>{track.country}</small></h1>
      <p className="lead">{track.summary}</p>
      <table className="sheet">
        <tbody>
          {rows.map(([name, value]) => (
            <tr key={name}><th>{name}</th><td>{value}</td></tr>
          ))}
        </tbody>
      </table>
      <h2>Why it works</h2>
      <p>{track.why}</p>
    </section>
  );
}

export default SetupDetail;
