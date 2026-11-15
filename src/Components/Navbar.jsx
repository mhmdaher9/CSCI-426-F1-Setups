import { NavLink, Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="header">
      <Link to="/" className="logo">PITWALL<span>SETUPS</span></Link>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/setups">Setups</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
