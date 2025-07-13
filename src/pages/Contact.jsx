import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call with axios
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        ...formData,
        timestamp: new Date().toISOString()
      });

      if (response.status === 201) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Schedule Your Visit</h1>
            <p>Ready to experience award-winning dental care? Contact us today for your free consultation!</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Visit Our Modern Clinic</h3>
              <p>123 Dental Street<br />Health City, HC 12345</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Call for Immediate Care</h3>
              <p><a href="tel:+1234567890">(234) 567-890</a></p>
              <small>24/7 Emergency: (234) 567-891</small>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email Our Team</h3>
              <p><a href="mailto:info@brightsmiledc.com">info@brightsmiledc.com</a></p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <h3>Convenient Hours</h3>
              <p>
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 4:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="form-container">
              <h2>Get Your Free Consultation</h2>
              <p>Take the first step towards your perfect smile. Fill out the form below and we'll contact you within 24 hours to schedule your complimentary consultation.</p>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  <strong>Thank you!</strong> Your consultation request has been received. We'll contact you within 24 hours to schedule your appointment.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error" role="alert">
                  <strong>Oops!</strong> There was an error processing your request. Please try again or call us directly at (234) 567-890.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Enter your full name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="error-message" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="Enter your email address"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="error-message" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="Enter your phone number"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="error-message" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Schedule Consultation</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="emergency">Urgent Dental Care</option>
                      <option value="insurance">Insurance Questions</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <span id="subject-error" className="error-message" role="alert">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your dental goals or concerns..."
                    rows="5"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="error-message" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Request Free Consultation'}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="map-container">
              <h2>Visit Our State-of-the-Art Clinic</h2>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Smile Dental Clinic Location"
                ></iframe>
              </div>
              <div className="map-info">
                <p><strong>Prime Location:</strong> Conveniently located in the heart of Health City with easy access from all major highways and public transportation routes.</p>
                <p><strong>Free Parking:</strong> Complimentary valet parking available for all patients in our secure, covered parking facility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <h2>Dental Emergency? We're Here 24/7</h2>
            <p>Don't suffer in pain! Our emergency team is available around the clock to provide immediate relief and expert care when you need it most.</p>
            <a href="tel:+91 9999999999" className="btn btn-emergency">Call Emergency: +91 9999999999</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;