import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import logo from "../assets/img/image.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link className="logo-nav" to="/">
        <img className="logo" src={logo} alt="SNACK Logo" />
      </Link>

      <div className={`links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setOpen(false)}>Cardápio</Link>
        <Link to="/Gallery" onClick={() => setOpen(false)}>Galeria</Link>
        <Link to="/location" onClick={() => setOpen(false)}>Localização</Link>
      </div>

      <Link to="/location" className="visit-btn">
        <p>Nos Visite</p>
      </Link>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}