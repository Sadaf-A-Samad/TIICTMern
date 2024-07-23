import React from "react";
// import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
              data-aos="fade-right"
            >
              {/* <Link
                to="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></Link> */}
            </div>

            <div
              className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
              data-aos="fade-left"
            >
              <h3>About US</h3>
              <p>
                The TIICT Computer Center (TandoAllahyar Institute of
                Information & Communication Technology) was established in March
                2016 and registered with TTB (Trade Testing Board) Sindh
                Pakistan and STEVTA (Sindh Technical Education & Vocational
                Training Authority) since 2017. Since 2017 TIICT Computer Center
                was served as a professional Institute and produced Qualified
                Candidates.
              </p>

              <div
                className="icon-box" data-aos="zoom-in" data-aos-delay="100"
              >
                <div className="icon">
                  <i className="bi bi-fingerprint"></i>
                </div>
                <h4 className="title">Our Vision:</h4>
                <p className="description">
                  " Get Trained Get Employed, Our Qualified Faculty Make
                  Professionals Here"
                </p>
              </div>

              <div
                className="icon-box" data-aos="zoom-in" data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bi bi-app-indicator"></i>
                </div>
                <h4 className="title">Our Mission:</h4>
                <p className="description">
                  “Learn Job Ready, Trending Courses then earn online; real
                  success starts here.”
                  <br />
                  Opportunities dont happen; You have to create them. Our
                  mission is to create awareness in students about Freelancing.
                  Freelancing opens the door for everybody. Freelancing allows
                  you to invest in and work on something that you enjoy doing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
