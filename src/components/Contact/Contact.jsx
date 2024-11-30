import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__section">
          <h3 className="contact__title">Contact Me</h3>
          <p className="contact__info">telasjareynolds@gmail.com</p>
          <p className="contact__info">(419) 699-0516</p>
          <div className="contact__social-icons">
            <a href="https://www.linkedin.com/in/telasjareynolds/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/telasjareynolds">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form name="submit-to-google-sheet">
            <input
              className="contact__input"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
            <input
              className="contact__input"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="contact__input"
              name="Message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
