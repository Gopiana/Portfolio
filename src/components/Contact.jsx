import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          {/* Formspree Form */}
          <form
            className="contact-form"
            action="https://formspree.io/f/xgvkkpgv" // ⬅️ Replace with your Formspree endpoint
            method="POST"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3><br />
            <p><i className="fas fa-envelope"></i> gopikanand2012@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 9489209714</p>
            <p><i className="fas fa-map-marker-alt"></i> Arumanai, KK</p>
            <div className="social-links">
              <a href="https://github.com/Gopiana"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/gopika-dr-b27a89340/"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100054733511002"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
