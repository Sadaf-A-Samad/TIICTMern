import React from "react";

function HeroSlider() {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div class="carousel slide" data-bs-ride="carousel" id="carousel-1">
          <div class="carousel-inner">
            <div class="carousel-item hero-nature active">
              <div class=" pulse animated carousel-hero jumbotron py-lg-5 px-lg-4 my-3">
                <h1 class="hero-title">Get Trained Get Employed</h1>
                <h2 class="hero-subtitle">
                  Our Qualified Faculty, Make Professionals Here
                </h2>
                <p>
                  {/* <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
            <div class="carousel-item hero-graphic">
              <div class="pulse animated carousel-hero jumbotron py-5 px-4">
                <h1 class="hero-title">
                  Learn Trending Courses Then Earn Online
                </h1>
                <ul class="hero-subtitle">
                  <li> Website Development Using Wordpress</li>
                  <li> Graphic Designing using Adobe Photoshop</li>
                  <li> Logo Designing using Adobe Illustrator</li>
                  <li>Video Editing using Adobe Premier</li>
                </ul>
                <p>
                  {/* <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
            <div class="carousel-item hero-professional">
              <div class="pulse animated carousel-hero jumbotron py-5 px-4">
                <h1 class="hero-title">Real Success Starts Here</h1>
                <h2>Advance Programming Languages</h2>
                <ul class="hero-subtitle">
                  <li> Mobile App Development Using React</li>
                  <li>Python Programming Language</li>
                  <li>Website Development Using PHP & Laravel</li>
                </ul>
                <p>
                  {/* <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
            <div class="carousel-item hero-diploma">
              <div class="pulse animated carousel-hero jumbotron py-5 px-4">
                <h1 class="hero-title">Get Diploma And Change Your World</h1>
                <h2>Goverment Registered Diploma's</h2>
                <ul class="hero-subtitle">
                  <li> DIT - Diploma in IT</li>
                  <li>CIT - Certificate in IT</li>
                  <li>ECE - Early Childhood Education</li>
                  <li>Website Development</li>
                  <li>Computerized Accounting</li>
                </ul>
                <p>
                  {/* <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
            <div class="carousel-item hero-freelancing">
              <div class="pulse animated carousel-hero jumbotron py-5 px-4">
                <h1 class="hero-title">Freelancing opens that door for you!</h1>
                <h2>Opportunities don’t happen, you have to create them</h2>
                <p class="hero-subtitle text-light">
                  Freelancing allows you to invest into and work on something
                  that you enjoy doing. <br />
                  You can pretty much take any activity or hobby and make it
                  profitable.
                </p>
                <p>
                  {/* <a
                    class="btn btn-success hero-button plat"
                    role="button"
                    href=""
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
            <div class="carousel-item hero-compsell">
              <div class="pulse animated carousel-hero jumbotron py-5 px-4">
                <h1 class="hero-title">Laptops Are Available on Sale</h1>
                <h2>On Reasonable Prices</h2>

                <p>
                  {/* <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
            <div class="carousel-item hero-cisco">
              <div class="pulse animated carousel-hero jumbotron py-5 px-4">
                <h1 class="hero-title">CISCO Certified</h1>
                {/* <!-- <p class="hero-subtitle text-light">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p> --> */}
                <p>
                  {/* <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a> */}
                </p>
              </div>
            </div>
          </div>
          <div>
            <a
              class="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carousel-1"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="3"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="4"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="5"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="6"></li>
          </ol>
        </div>

        {/* <!-----------------> */}

        {/* <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
      </g>
    </svg> */}
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
}

export default HeroSlider;
