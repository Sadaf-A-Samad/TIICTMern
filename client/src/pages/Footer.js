import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="footer-info">
                  <h3>TIICT Computer Center</h3>
                  <p className="pb-3">
                    <em>
                      House No 2, Meo Colony، Chamber Rd, opp. Bhai ji hotel،
                      Tando Allahyar, Tando Allah Yar, Sindh 70010
                    </em>
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-newsletter"></div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> 0308-2042435, 0333-2129878
                  <br />
                  <strong>Email:</strong> info@tiict.edu.pk
                  <br />
                </p>
                <div className="social-links mt-3">
                  <Link to="" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="" className="instagram">
                    <i className="bi bi-instagram"></i>{" "}
                  </Link>
                  <Link to="" className="google-plus">
                    <i className="bi bi-google"></i>
                  </Link>
                  <Link to="" className="linkedin">
                    <i className="bi bi-youtube"></i>
                  </Link>
                  <Link to="" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>TIICT</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <Link to="https://tiict.edu.pk/" className="">
              TIICT Computer Center
            </Link>
          </div>
        </div>
      </footer>

      <Link
        to=""
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
      {/* <div id="preloader"></div> */}
    </>
  );
}

export default Footer;
