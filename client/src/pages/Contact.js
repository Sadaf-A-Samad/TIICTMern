import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact bg3">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    <strong> TIICT Computer Center</strong>
                    <br />
                    House No 2, Meo Colony، Chamber Rd, opp. Bhai ji hotel،
                    Tando Allahyar, Tando Allah Yar, Sindh 70010
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@tiict.edu.pk</p>
                  <p>asamad@tiict.edu.pk</p>
                  <p>asamad@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+92 308 2042 435</p>
                  <p>+92 333 2129 878</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-8 mt-5 mt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {/* <!--Google map--> */}
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4585864667683!2d68.71846761464575!3d25.456358283776268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c05f16dd94f33%3A0xdb3a3477628fef91!2sTIICT%20Computer%20Center!5e0!3m2!1sen!2s!4v1658559063580!5m2!1sen!2s"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  Title="TheGoogleMap"
                ></iframe>
              </div>

              {/* <!--Google Maps--> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
