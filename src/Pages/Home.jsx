import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [wing, setWing] = useState(5)
  const topSpeed = Math.round(352 - wing * 4.2)
  const grip = Math.round(48 + wing * 5.2)
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>One slider. Every race weekend's biggest trade-off.</h1>
          <p className="lead">Set the wing angle and watch what you gain and what you give up. Real F1 setups are dozens of these compromises, tuned for each track.</p>
          <div className="board" aria-live="polite">
            <label htmlFor="wing">Wing level: <b>{wing}</b> / 10</label>
            <input id="wing" type="range" min="1" max="10" value={wing} onChange={e => setWing(+e.target.value)} />
            <div className="meter"><span>Top speed</span><div><i style={{ width: `${(topSpeed - 280) / 0.8}%` }} /></div><b>{topSpeed} km/h</b></div>
            <div className="meter"><span>Corner grip</span><div><i style={{ width: `${grip}%` }} /></div><b>{grip}%</b></div>
          </div>
          <Link className="btn" to="/setups">Browse track setups</Link>
        </div>
      </section>
      <section className="wrap features">
        <h2>What you can do here</h2>
        <div className="grid">
          <article><h3>Compare circuits</h3><p>See how wings, ride height and brake bias change from Monza to Monaco.</p></article>
          <article><h3>Learn the settings</h3><p>Plain-language explanations of every setup parameter.</p></article>
          <article><h3>Open any setup</h3><p>Each circuit has its own page with the full sheet and the reasoning behind it.</p></article>
        </div>
      </section>
    </>
  )
}

export default Home;
