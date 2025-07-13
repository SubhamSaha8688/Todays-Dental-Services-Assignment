import React from 'react';

const About = () => {
  const practitioners = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Clinic Director",
      specialization: "General Dentistry, Cosmetic Dentistry",
      experience: "15+ years",
      education: "DDS from Harvard School of Dental Medicine",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Johnson is passionate about creating beautiful, healthy smiles. She specializes in cosmetic dentistry and has helped thousands of patients achieve their dream smiles."
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      specialization: "Orthodontics, Invisalign",
      experience: "12+ years",
      education: "DMD from University of Pennsylvania",
      image: "https://images.pexels.com/photos/6812524/pexels-photo-6812524.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Chen is an expert in orthodontics and has transformed countless smiles using both traditional braces and modern Invisalign technology."
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Oral Surgeon",
      specialization: "Oral Surgery, Dental Implants",
      experience: "10+ years",
      education: "DDS, MS from UCLA School of Dentistry",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Rodriguez specializes in complex oral surgeries and dental implants, helping patients restore their oral health and confidence."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Award-Winning Dental Excellence</h1>
            <p>15+ years of transforming smiles with cutting-edge technology and compassionate care</p>
          </div>
        </div>
      </section>

      {/* Clinic Background */}
      <section className="clinic-background">
        <div className="container">
          <div className="content-layout">
            <div className="content-text">
              <h2>A Legacy of Excellence</h2>
              <p>Founded in 2010 by Dr. Sarah Johnson, Bright Smile Dental Clinic has revolutionized dental care in our community. What began as a vision to provide pain-free, premium dental services has grown into the region's most trusted dental practice.</p>
              
              <p>Our breakthrough approach combines board-certified expertise with state-of-the-art technology and a spa-like environment. We've earned recognition as "Best Dental Practice 2024" and maintain a 99% patient satisfaction rate.</p>
              
              <p>Today, we're the premier choice for families seeking exceptional dental care, with over 10,000 satisfied patients and a reputation for transforming smiles and lives.</p>
              
              <div className="stats">
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years Excellence</p>
                </div>
                <div className="stat-item">
                  <h3>10,000+</h3>
                  <p>Satisfied Patients</p>
                </div>
                <div className="stat-item">
                  <h3>99%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="content-image">
              <img 
                src="https://images.pexels.com/photos/3779700/pexels-photo-3779700.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Modern dental clinic interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Philosophy */}
      <section className="mission-philosophy">
        <div className="container">
          <div className="section-header">
            <h2>Our Commitment to Excellence</h2>
            <p>The core values that drive our award-winning patient care and clinical results</p>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver world-class dental care that transforms lives through exceptional results, cutting-edge technology, and compassionate service. We're committed to making every patient feel confident, comfortable, and completely satisfied.</p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">💡</div>
              <h3>Our Vision</h3>
              <p>To be the region's premier dental destination, setting the gold standard for clinical excellence, patient experience, and innovative treatments. We envision a community where everyone enjoys perfect oral health and confident smiles.</p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">⭐</div>
              <h3>Our Values</h3>
              <ul>
                <li>Uncompromising clinical excellence</li>
                <li>Pain-free, anxiety-free experiences</li>
                <li>Cutting-edge technology and techniques</li>
                <li>Transparent, honest communication</li>
                <li>Personalized, compassionate care</li>
                <li>Continuous innovation and improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section className="practitioners">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Award-Winning Specialists</h2>
            <p>Board-certified experts with decades of combined experience and a passion for creating perfect smiles</p>
          </div>
          
          <div className="practitioners-grid">
            {practitioners.map((practitioner, index) => (
              <div key={index} className="practitioner-card">
                <div className="practitioner-image">
                  <img src={practitioner.image} alt={`Dr. ${practitioner.name} - ${practitioner.title}`} />
                </div>
                <div className="practitioner-info">
                  <h3>{practitioner.name}</h3>
                  <h4>{practitioner.title}</h4>
                  <div className="practitioner-details">
                    <p><strong>Specialization:</strong> {practitioner.specialization}</p>
                    <p><strong>Experience:</strong> {practitioner.experience}</p>
                    <p><strong>Education:</strong> {practitioner.education}</p>
                  </div>
                  <p className="practitioner-bio">{practitioner.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="facility-features">
        <div className="container">
          <div className="section-header">
            <h2>Cutting-Edge Technology & Comfort</h2>
            <p>Experience dental care in our spa-like environment with the latest technology for superior results</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🔬</div>
              <h3>Latest Technology</h3>
              <p>3D imaging, laser dentistry, digital impressions, and computer-guided procedures for precise, pain-free treatments with superior results.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏥</div>
              <h3>Hospital-Grade Safety</h3>
              <p>Advanced sterilization systems and strict infection control protocols exceed industry standards for your complete safety and peace of mind.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎵</div>
              <h3>Spa-Like Comfort</h3>
              <p>Massage chairs, aromatherapy, noise-canceling headphones, and sedation options create a relaxing, anxiety-free experience.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">♿</div>
              <h3>Complete Accessibility</h3>
              <p>Fully accessible facility designed for patients of all abilities, with convenient parking and barrier-free access throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Certifications */}
      <section className="awards-certifications">
        <div className="container">
          <div className="section-header">
            <h2>Awards & Recognition</h2>
            <p>Industry recognition for our outstanding patient care and clinical excellence</p>
          </div>
          
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Best Dental Practice 2024</h3>
              <p>Health City Chamber of Commerce</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <h3>Top Rated Dentist</h3>
              <p>5-Star Google & Yelp Reviews</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🎖️</div>
              <h3>ADA Gold Standard</h3>
              <p>American Dental Association</p>
            </div>
            <div className="award-item">
              <div className="award-icon">💎</div>
              <h3>Clinical Excellence Award</h3>
              <p>State Board of Dentistry</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;