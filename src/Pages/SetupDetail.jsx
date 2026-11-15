import { Link, useParams } from 'react-router-dom';

function SetupDetail({ tracks }) {
  const { id } = useParams();
  const t = tracks.find(x => x.id === id);
  if (!t) return <section className="wrap"><h1>Circuit not found</h1><Link to="/setups">Back to all setups</Link></section>;
  const next = tracks[(tracks.indexOf(t) + 1) % tracks.length];
  const rows = [
    ['Front wing', `${t.wing[0]} / 10`, t.wing[0] * 10],
    ['Rear wing', `${t.wing[1]} / 10`, t.wing[1] * 10],
    ['Ride height (F / R)', `${t.ride[0]} / ${t.ride[1]} mm`],
    ['Brake bias', `${t.bias}% front`],
    ['Differential (on-throttle)', `${t.diff}%`],
    ['Tyre pressure (F / R)', `${t.psi[0]} / ${t.psi[1]} psi`],
    ['Camber (F / R)', `${t.camber[0]}° / ${t.camber[1]}°`],
  ];
  return (
    <section className="wrap">
      <Link to="/setups">← All setups</Link>
      <h1>{t.name} <small>{t.country}</small></h1>
      <p className="lead">{t.summary}</p>
      <table className="sheet">
        <tbody>{rows.map(([k, v, pct]) => (
          <tr key={k}><th>{k}</th><td>{v}</td><td>{pct && <div className="bar"><i style={{ width: `${pct}%` }} /></div>}</td></tr>
        ))}</tbody>
      </table>
      <h2>Why it works</h2>
      <p>{t.why}</p>
      <Link className="btn" to={`/setups/${next.id}`}>Next: {next.name}</Link>
    </section>
  );
}

export default SetupDetail;
