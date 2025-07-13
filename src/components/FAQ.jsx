import { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What makes Bright Smile different from other dental practices?",
      answer: "We combine award-winning expertise with cutting-edge technology and a spa-like environment. Our board-certified specialists, pain-free techniques, and personalized care plans ensure exceptional results and patient satisfaction."
    },
    {
      question: "Do you accept insurance and offer payment plans?",
      answer: "Yes, we accept most major dental insurance plans and offer flexible payment options including 0% financing. Our financial coordinators will help maximize your benefits and create a payment plan that fits your budget."
    },
    {
      question: "Is dental treatment painful? How do you ensure comfort?",
      answer: "We prioritize pain-free dentistry using advanced techniques, laser technology, and sedation options. Most patients are amazed at how comfortable and relaxing their treatment experience is with us."
    },
    {
      question: "How quickly can I get an appointment?",
      answer: "We offer same-day appointments for emergencies and typically schedule new patients within 24-48 hours. Our extended hours and weekend availability ensure we can accommodate your busy schedule."
    },
    {
      question: "What technology do you use for better results?",
      answer: "We use state-of-the-art digital imaging, laser dentistry, 3D treatment planning, and computer-guided procedures for precise, efficient treatments with faster healing and superior results."
    },
    {
      question: "Do you offer cosmetic dentistry and smile makeovers?",
      answer: "Absolutely! We specialize in complete smile transformations using veneers, whitening, Invisalign, and other cosmetic procedures. Schedule a consultation to see how we can create your perfect smile."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Your Questions Answered</h2>
          <p>Get instant answers to the most common questions about our premium dental services and patient experience.</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className="faq-answer"
                aria-hidden={openFAQ !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;