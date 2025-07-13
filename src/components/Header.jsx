import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="Bright Smile Dental Clinic Home">
            <div className="logo-icon">🦷</div>
            <div className="logo-text">
              <h1>Bright Smile</h1>
              <span>Dental Clinic</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main navigation">
            <ul className="nav-list">
              <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/services" className={isActive('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+91 9999999999" className="phone-link" aria-label="Call us at +91 9999999999">
              📞 9999999999
            </a>
            <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;