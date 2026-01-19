import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Coding from "../../Images/Coding.gif"; // ✅ adjust path if needed
import Sanji from "../../Images/Sanji.webp"; 


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0n4gdza", // your EmailJS service ID
        "template_9gker2d", // your template ID
        form.current,
        "MA1TmNGNbXn0r-1NA" // your public key
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Email sending failed:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact</h2>
      <div className="contact-section-break"></div>
      <p className="contact-text">
        I'm always open to discussing new opportunities, collaborations, or just
        connecting with like-minded individuals. Feel free to reach out to me
        via email or through my social media channels.
      </p>

      <div className="contact-form-wrapper">
        {/* LEFT SIDE — GIF */}
        <div className="contact-gif-container">
          <img src={Coding} alt="Coding animation" className="contact-gif" />
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Subject
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control message-box"
                rows="7"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="gifs">
        <img src={Sanji} alt="Animation" />
      </div>
    </div>
  );
}

export default Contact;
