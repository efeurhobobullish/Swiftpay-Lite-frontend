import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Clock, ArrowLeft } from "lucide-react";

const Support = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Go to your profile settings and click on 'Update Password'. You'll receive a reset link via email."
    },
    {
      question: "Why is my transaction failing?",
      answer: "Transactions can fail due to insufficient funds, network issues, or incorrect details. Check your balance and try again."
    },
    {
      question: "How long do transactions take?",
      answer: "Most transactions are instant. However, some may take up to 5 minutes depending on network congestion."
    },
    {
      question: "Is there a transaction limit?",
      answer: "Yes, for security reasons, there's a daily transaction limit of ₦50,000 for new users."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email at support@questpay.com or call our hotline at +234-800-QUESTPAY."
    }
  ];

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      description: "Get help via email",
      details: "support@questpay.com",
      action: "Send us an email"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Support",
      description: "Call our support team",
      details: "+234-800-QUESTPAY",
      action: "Call now"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Live Chat",
      description: "24/7 chat support",
      details: "Available 24 hours",
      action: "Start chat"
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="support-container">
      <div className="support-header">
        <Link to="/dashboard" className="back-button">
          <ArrowLeft size={20} />
        </Link>
        <h1>Support Center</h1>
      </div>

      <div className="support-content">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </button>
          <button
            className={`tab ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
        </div>

        {activeTab === "faq" && (
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`arrow ${expandedFaq === index ? "expanded" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="contact-section">
            <h2>Get in Touch</h2>
            <p className="contact-description">
              Our support team is here to help you with any questions or issues.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    {method.icon}
                  </div>
                  <div className="contact-info">
                    <h3>{method.title}</h3>
                    <p>{method.description}</p>
                    <span className="contact-details">{method.details}</span>
                  </div>
                  <button className="contact-action">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>

            <div className="support-hours">
              <div className="hours-header">
                <Clock size={20} />
                <h3>Support Hours</h3>
              </div>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .support-container {
          min-height: 100dvh;
          background: var(--light-bg);
          padding: 1rem;
        }

        .support-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--medium-bg);
          color: var(--font-color);
          transition: background 0.3s ease;
        }

        .back-button:hover {
          background: var(--border);
        }

        .support-header h1 {
          font-size: 1.5rem;
          color: var(--font-color);
          font-weight: 600;
        }

        .tabs {
          display: flex;
          background: var(--medium-bg);
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 2rem;
        }

        .tab {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          color: var(--font-color-light);
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab.active {
          background: var(--primary-color);
          color: var(--white);
        }

        .faq-section h2,
        .contact-section h2 {
          font-size: 1.25rem;
          color: var(--font-color);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .faq-item {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .faq-question {
          width: 100%;
          padding: 1rem 1.5rem;
          border: none;
          background: var(--white);
          color: var(--font-color);
          font-weight: 500;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .faq-question:hover {
          background: var(--medium-bg);
        }

        .arrow {
          transition: transform 0.3s ease;
          font-size: 0.75rem;
        }

        .arrow.expanded {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--font-color-light);
          line-height: 1.6;
        }

        .contact-description {
          color: var(--font-color-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--white);
          border-radius: 12px;
          box-shadow: var(--shadow);
        }

        .contact-icon {
          color: var(--primary-color);
        }

        .contact-info {
          flex: 1;
        }

        .contact-info h3 {
          color: var(--font-color);
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .contact-info p {
          color: var(--font-color-light);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .contact-details {
          color: var(--primary-color);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .contact-action {
          padding: 0.5rem 1rem;
          background: var(--primary-color);
          color: var(--white);
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .contact-action:hover {
          filter: brightness(110%);
        }

        .support-hours {
          background: var(--white);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: var(--shadow);
        }

        .hours-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .hours-header h3 {
          color: var(--font-color);
          font-weight: 600;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .hour-item {
          display: flex;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        .hour-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .hour-item span:first-child {
          color: var(--font-color);
        }

        .hour-item span:last-child {
          color: var(--font-color-light);
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .support-container {
            padding: 0.5rem;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .contact-info {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Support;
