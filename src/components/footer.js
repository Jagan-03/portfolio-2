const Footer = () => {
  return (
    <section id="contact">

    <div className="footer w-100">
      <a href="mailto:jaganmj324@gmail.com">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="footer-details">SAY</h1>
          <h1 className="footer-details">HELLO</h1>
        </div>
      </a>
      <div className="d-flex align-items-center justify-content-between p-5">
        <a href="tel:7010707641" className="text-light"><i className="fas fa-phone-alt mx-2"></i>+91-7010707641</a>
        <a href="https://github.com/Jagan-03" target="_blank" rel="noreferrer"><i className="fab fa-github text-light fa-2x"></i></a>
      </div>
    </div>
    </section>
  );
};

export default Footer;
