import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">TWITTER</Link>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="/login" className="action_btn">
          Get Started
        </Link>
      </div>
      <main>
        <section id="hero">
          <h1>Welcome to the Twitter home page</h1>
          <p>Your gateway to real-time conversations and global connections.<br />
            Explore trending topics and engage with the community with just a click.
          </p>
        </section>
      </main>
      <div className="toggle_btn" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className={isOpen ? "dropdown_menu open" : "dropdown_menu"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="action_btn">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
