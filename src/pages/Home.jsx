import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const Home = () => {
  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.'
    },
    {
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers to enhance your appearance.'
    },
    {
      icon: '🔧',
      title: 'Orthodontics',
      description: 'Braces and aligners to straighten teeth and improve your bite.'
    },
    {
      icon: '🏥',
      title: 'Oral Surgery',
      description: 'Tooth extractions, implants, and other surgical procedures.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" role="banner">
  <div className="hero-overlay"></div>
  <div className="container">
    <div className="hero-content">
      <h1>Transform Your Smile Today</h1>
      <p>Experience world-class dental care with cutting-edge technology and compassionate professionals. Your perfect smile is just one appointment away.</p>
      <div className="hero-actions">
        <Link to="/contact" className="btn btn-primary btn-large">Book Free Consultation</Link>
        <Link to="/services" className="btn btn-secondary btn-large">Explore Our Services</Link>
      </div>
    </div>
  </div>
</section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Award-Winning Dental Excellence</h2>
              <p>At Bright Smile Dental Clinic, we've revolutionized dental care by combining advanced technology with personalized attention. Our team of board-certified specialists delivers exceptional results that exceed expectations.</p>
              <p>With over 15 years of excellence and 10,000+ satisfied patients, we're the trusted choice for families seeking premium dental care. Experience the difference that expertise and compassion make.</p>
              <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
            <div className="intro-image">
              <img 
                src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Friendly dental team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Dental Solutions</h2>
            <p>From routine cleanings to complete smile makeovers, our expert team provides the full spectrum of dental care using the latest technology and techniques.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                {/* <div className="service-icon">{service.icon}</div> */}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why 10,000+ Patients Choose Us</h2>
            <p>Experience the difference that sets us apart as the region's premier dental practice.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Award-Winning Expertise</h3>
              <p>Board-certified specialists with 15+ years of experience and recognition as "Best Dental Practice 2024" by the Health City Chamber of Commerce.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔬</div>
              <h3>Cutting-Edge Technology</h3>
              <p>State-of-the-art digital imaging, laser dentistry, and pain-free techniques ensure precise, comfortable treatments with faster healing.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💙</div>
              <h3>Anxiety-Free Experience</h3>
              <p>Our gentle approach, sedation options, and spa-like environment transform dental visits into relaxing, stress-free experiences.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏰</div>
              <h3>Convenient & Flexible</h3>
              <p>Same-day appointments, extended hours, emergency care, and flexible payment plans make quality dental care accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Dream Smile?</h2>
            <p>Join thousands of satisfied patients who've transformed their smiles with us. Your journey to perfect oral health starts with a simple call.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">Get Free Consultation</Link>
              <a href="tel:+91 9999999999" className="btn btn-secondary btn-large">Call 9999999999</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;