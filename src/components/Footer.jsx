import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">🦷</div>
              <div className="logo-text">
                <h3>Bright Smile</h3>
                <span>Dental Clinic</span>
              </div>
            </div>
            <p>Providing exceptional dental care with a gentle touch. Your smile is our priority.</p>
            <div className="social-links">
              <a href="#" aria-label="Follow us on Facebook">📘</a>
              <a href="#" aria-label="Follow us on Twitter">🐦</a>
              <a href="#" aria-label="Follow us on Instagram">📷</a>
              <a href="#" aria-label="Connect with us on LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#general-dentistry">General Dentistry</a></li>
              <li><a href="#cosmetic-dentistry">Cosmetic Dentistry</a></li>
              <li><a href="#orthodontics">Orthodontics</a></li>
              <li><a href="#oral-surgery">Oral Surgery</a></li>
            </ul>
          </div>

          
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Bright Smile Dental Clinic. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;