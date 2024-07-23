import React from "react";
import sindh from "../imgs/gallery/Sindhgovt.png";
import stevta from "../imgs/gallery/stevta.png";
import ttb from "../imgs/gallery/ttb.png";
import cisco from "../imgs/gallery/cisco.png";
function Affiliation() {
  return (
    <>
      <section id="gallery" className="gallery bg2">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Affiliated With</h2>
            <p>Check our Affiliation</p>
          </div>

          <div className="row g-0" data-aos="fade-left">
            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img src={sindh} alt="" className="aff-org" />
                <h5>Affiliated with Sindh Govt</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <img src={stevta} alt="" className="aff-org" />
                <h5>
                  Sindh Technical Education & Vocational Training Authority
                </h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={ttb} alt="" className="aff-org" />
                <h5>Trade Testing Board Sindh</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <img src={cisco} alt="" className="aff-org" />
                <h5>CISCO Networking Academy</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Affiliation;
