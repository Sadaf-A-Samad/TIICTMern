import React from "react";
import sadafImg from "../imgs/testimonials/sadaf.jpg";
import samadImg from "../imgs/testimonials/samad.jpg";
// import avatarImg from "../imgs/testimonials/female-avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Team() {
  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title bg-light px-4 py-3" data-aos="fade-up">
            <h2>Team</h2>
            <p>Great Team</p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SwiperSlide>
              {" "}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={samadImg} className="testimonial-img" alt="" />
                  <h3>Abdul Samad</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    {/* <i className="bx bxs-quote-alt-left quote-icon-left"></i>  */}
                    MSIT (Communication Systems & Networks) SAU, Tandojam, BSIT
                    (Bachelor of Sciences in Information Technology) SAU,
                    Tandojam, Pakistan <br />
                    CCNA Certified &nbsp; - ID:CSCO11353323 &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; CCNP SWITCHING &nbsp; - ID:CSCO11353323
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; MCP Microsoft &nbsp; - ID: 5698618 <br />
                    MCSE Microsoft &nbsp; - ID: sr2873809 &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; JUNIPER Juniper &nbsp; ID: sr2873809{" "}
                    <br />
                    15 Year Teaching & Administrative Management Experience in
                    IT Field. Specialized in Networking.
                    {/* <i className="bx bxs-quote-alt-right quote-icon-right"></i>  */}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={sadafImg} className="testimonial-img" alt="" />
                  <h3>Sadaf Abdul Samad</h3>
                  <h4>Faculty Member</h4>
                  <p>
                    {/* <i className="bx bxs-quote-alt-left quote-icon-left"></i>  */}
                    BSIT (Bachelor of Sciences in Information Technology) from
                    SAU TANDOJAM. <br />
                    MCPD (Microsoft Certified Professional Developer) MCP - ID:
                    7103706 Passing Year: Sep-2009. <br />8 Year Teaching and
                    Development Experience in IT Field. Specialized in Designing
                    & Development.
                    {/* <i className="bx bxs-quote-alt-right quote-icon-right"></i>  */}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Team;
