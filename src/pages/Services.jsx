import { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "General Dentistry",
      icon: "🦷",
      image: "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=600",
      shortDescription: "Comprehensive preventive and restorative dental care for optimal oral health.",
      fullDescription: "Our general dentistry services form the foundation of oral health care. We provide comprehensive examinations, professional cleanings, digital X-rays, and fluoride treatments. Our preventive approach includes early detection of cavities, gum disease, and other oral health issues. We also offer restorative treatments such as fillings, crowns, and bridges to repair damaged teeth.",
      procedures: [
        "Regular dental examinations and cleanings",
        "Digital X-rays and oral cancer screenings",
        "Cavity detection and treatment",
        "Fluoride treatments and sealants",
        "Composite and amalgam fillings",
        "Root canal therapy",
        "Dental crowns and bridges"
      ],
      duration: "30-90 minutes",
      price: "Starting from $150"
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      icon: "✨",
      image: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=600",
      shortDescription: "Transform your smile with our advanced cosmetic dental treatments.",
      fullDescription: "Our cosmetic dentistry services are designed to enhance the appearance of your smile while maintaining optimal oral health. We use the latest techniques and materials to create beautiful, natural-looking results that boost your confidence and self-esteem.",
      procedures: [
        "Professional teeth whitening",
        "Porcelain veneers",
        "Dental bonding",
        "Smile makeovers",
        "Tooth contouring and reshaping",
        "Gum line correction",
        "Aesthetic crowns"
      ],
      duration: "1-3 hours per session",
      price: "Starting from $300"
    },
    {
      id: 3,
      title: "Orthodontics",
      icon: "🔧",
      image: "https://images.pexels.com/photos/6812524/pexels-photo-6812524.jpeg?auto=compress&cs=tinysrgb&w=600",
      shortDescription: "Straighten your teeth with traditional braces or modern Invisalign treatment.",
      fullDescription: "Our orthodontic services help correct misaligned teeth and bite issues using both traditional and modern treatment methods. We create personalized treatment plans to achieve optimal results while ensuring comfort throughout the process.",
      procedures: [
        "Traditional metal braces",
        "Clear ceramic braces",
        "Invisalign clear aligners",
        "Retainers and maintenance",
        "Bite correction",
        "Space closure",
        "Early intervention orthodontics"
      ],
      duration: "12-24 months treatment",
      price: "Starting from $3,500"
    },
    {
      id: 4,
      title: "Oral Surgery",
      icon: "🏥",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      shortDescription: "Expert surgical procedures for complex dental issues and tooth replacement.",
      fullDescription: "Our oral surgery services address complex dental issues that require surgical intervention. Our experienced oral surgeon uses advanced techniques and anesthesia options to ensure comfort and optimal outcomes for all procedures.",
      procedures: [
        "Wisdom tooth extraction",
        "Dental implant placement",
        "Bone grafting",
        "Tooth extractions",
        "Oral pathology treatment",
        "TMJ disorder treatment",
        "Corrective jaw surgery"
      ],
      duration: "1-4 hours",
      price: "Starting from $500"
    },
    {
      id: 5,
      title: "Pediatric Dentistry",
      icon: "👶",
      image: "https://images.pexels.com/photos/3779700/pexels-photo-3779700.jpeg?auto=compress&cs=tinysrgb&w=600",
      shortDescription: "Gentle, child-friendly dental care to establish healthy habits early.",
      fullDescription: "Our pediatric dentistry services are specially designed for children from infancy through adolescence. We create a fun, comfortable environment that helps children develop positive associations with dental care while establishing good oral health habits for life.",
      procedures: [
        "First dental visits and examinations",
        "Pediatric cleanings and fluoride",
        "Dental sealants",
        "Children's fillings",
        "Space maintainers",
        "Habit counseling",
        "Preventive education"
      ],
      duration: "30-60 minutes",
      price: "Starting from $120"
    },
    {
      id: 6,
      title: "Periodontal Care",
      icon: "🌿",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
      shortDescription: "Comprehensive treatment for gum disease and periodontal health maintenance.",
      fullDescription: "Our periodontal care services focus on preventing, diagnosing, and treating gum disease. We use the latest techniques in non-surgical and surgical periodontal therapy to restore and maintain healthy gums and supporting structures.",
      procedures: [
        "Periodontal examinations",
        "Deep cleaning (scaling and root planing)",
        "Antibiotic therapy",
        "Gum disease treatment",
        "Periodontal maintenance",
        "Soft tissue grafting",
        "Pocket reduction surgery"
      ],
      duration: "45-120 minutes",
      price: "Starting from $200"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Premium Dental Services</h1>
            <p>Comprehensive, cutting-edge treatments delivered by award-winning specialists for exceptional results</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>World-Class Dental Solutions</h2>
            <p>From preventive care to complete smile makeovers, experience the difference that expertise and technology make</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <div className="service-meta">
                    <span className="duration">⏱️ {service.duration}</span>
                    <span className="price">💰 {service.price}</span>
                  </div>
                  <button 
                    className="btn btn-outline"
                    onClick={() => openModal(service)}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-icon">{selectedService.icon}</div>
                <h2>{selectedService.title}</h2>
              </div>
              <div className="modal-body">
                <img src={selectedService.image} alt={selectedService.title} />
                <div className="modal-text">
                  <p className="service-description">{selectedService.fullDescription}</p>
                  
                  <div className="service-details">
                    <h3>Procedures Include:</h3>
                    <ul>
                      {selectedService.procedures.map((procedure, index) => (
                        <li key={index}>{procedure}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-info">
                    <div className="info-item">
                      <strong>Duration:</strong> {selectedService.duration}
                    </div>
                    <div className="info-item">
                      <strong>Price:</strong> {selectedService.price}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <a href="/contact" className="btn btn-primary">Book Appointment</a>
                    <a href="tel:+91-9999999999" className="btn btn-secondary">Call Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Information */}
      <section className="services-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">🔬</div>
              <h3>Cutting-Edge Technology</h3>
              <p>State-of-the-art 3D imaging, laser dentistry, and computer-guided procedures ensure precise, pain-free treatments with superior results.</p>
            </div>
            <div className="info-item">
              <div className="info-icon">👨‍⚕️</div>
              <h3>Board-Certified Specialists</h3>
              <p>Our award-winning team of experts brings decades of experience and advanced training to deliver exceptional results every time.</p>
            </div>
            <div className="info-item">
              <div className="info-icon">💙</div>
              <h3>Anxiety-Free Experience</h3>
              <p>Our spa-like environment, sedation options, and gentle approach transform dental visits into relaxing, comfortable experiences.</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📅</div>
              <h3>Convenient Scheduling</h3>
              <p>Same-day appointments, extended hours, weekend availability, and emergency care ensure we're here when you need us most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Smile?</h2>
            <p>Experience the difference that award-winning care makes. Schedule your consultation today and discover why thousands choose us.</p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary btn-large">Get Free Consultation</a>
              <a href="tel:+91-9999999999" className="btn btn-secondary btn-large">Call +91-9999999999</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;