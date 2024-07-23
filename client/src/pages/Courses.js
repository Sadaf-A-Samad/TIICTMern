import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <section id="features" className="features bg2">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Courses</h2>
            <p>Check Our Courses</p>
          </div>

          <div className="row" data-aos="fade-left">
            <div className="col-lg-3 col-md-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-bs-toggle="collapse"
                href="#collapse1"
              >
                <box-icon
                  type="logo"
                  name="adobe"
                  animation="spin-hover"
                  size="lg"
                  color="#04599e"
                ></box-icon>

                {/* <img src="assets/img/courses/Adobe_Photoshop.png" alt="" /> */}
                <h3>
                  <Link to="">Graphic Designing using Photoshop</Link>
                </h3>
              </div>
              <div
                id="collapse1"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  we will cover in this course: Logo Design, Social Media
                  Graphics, Poster, Business Cards and much more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-bs-toggle="collapse"
                href="#collapse2"
              >
                {/* <img src="assets/img/courses/adobe-illustrator.png" alt="" /> */}
                <box-icon
                  type="logo"
                  name="sketch"
                  animation="spin-hover"
                  size="lg"
                  color="#ff0000"
                ></box-icon>
                <h3>
                  <Link to="">Logo Designing using Illustrator</Link>
                </h3>
              </div>
              <div
                id="collapse2"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  we will cover in this course: Logo Design, Social Media
                  Graphics, Vector Graphics, 3D and much more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="150"
                data-bs-toggle="collapse"
                href="#collapse3"
              >
                {/* <img src="assets/img/courses/adobe-premiere.png" alt="" /> */}
                <box-icon
                  type="solid"
                  name="videos"
                  animation="spin-hover"
                  size="lg"
                  color="purple"
                ></box-icon>
                <h3>
                  <Link to="">Video Editing using Premier</Link>
                </h3>
              </div>
              <div
                id="collapse3"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Basic Editing Tools, Editing
                  Audio, Video Effects, Youtube and much more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-bs-toggle="collapse"
                href="#collapse4"
              >
                <box-icon
                  type="logo"
                  name="upwork"
                  animation="spin-hover"
                  size="lg"
                  color="green"
                ></box-icon>
                {/* <img src="assets/img/courses/fiverr.png" alt="" /> */}

                <h3>
                  <Link to="">Freelancing</Link>
                </h3>
              </div>
              <div
                id="collapse4"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  Learn about Fiverr.com <br /> Freelancer.com <br /> Upwork.com{" "}
                  <br /> PeoplePerHour.com and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="250"
                data-bs-toggle="collapse"
                href="#collapse5"
              >
                {/* <span
                  className="bi bi-wordpress"
                  style={{ color: "#555451" }}
                ></span> */}
                <box-icon
                  type="logo"
                  name="wordpress"
                  animation="spin-hover"
                  size="lg"
                  color="#555451"
                ></box-icon>

                <h3>
                  <Link to="">Website Designing using Wordpress</Link>
                </h3>
              </div>
              <div
                id="collapse5"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Downloading/ Installing XAMPP &
                  WordPress, Set-up an online account, Posts, Themes, Plugins
                  and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-bs-toggle="collapse"
                href="#collapse6"
              >
                <box-icon
                  type="logo"
                  name="python"
                  animation="spin-hover"
                  size="lg"
                  color="orange"
                ></box-icon>

                <h3>
                  <Link to="">Python Programming</Link>
                </h3>
              </div>
              <div
                id="collapse6"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 6 Months </b>
                  <br />
                  We will cover in this course: Basics of Python, OOP Concepts,
                  Database Cnnectivity, NumPy, Pandas and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="350"
                data-bs-toggle="collapse"
                href="#collapse7"
              >
                <box-icon
                  type="logo"
                  name="react"
                  animation="spin-hover"
                  size="lg"
                  color="#04599e"
                ></box-icon>
                {/* <img src="assets/img/courses/react.png" alt="" /> */}

                <h3>
                  <Link to="">Website Development Using ReactJS & NodeJS</Link>
                </h3>
              </div>
              <div
                id="collapse7"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 6 Months </b>
                  <br />
                  We will cover in this course: JavaScript basics, HTML and CSS,
                  React JSX, Hooks, Postgre Database, NodeJS and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-bs-toggle="collapse"
                href="#collapse8"
              >
                <box-icon
                  type="logo"
                  name="android"
                  animation="spin-hover"
                  size="lg"
                  color="#149f6e"
                ></box-icon>
                {/* <img src="assets/img/courses/mobileApp.png" alt="" /> */}
                <h3>
                  <Link to="">Mobile App Development using React Native</Link>
                </h3>
              </div>
              <div
                id="collapse8"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 6 Months </b>
                  <br />
                  We will cover in this course: JavaScript basics, HTML and CSS,
                  React JSX, custom markup language, Application Development on
                  both platforms i.e. iOS and Android and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="450"
                data-bs-toggle="collapse"
                href="#collapse9"
              >
                {/* <img src="assets/img/courses/diploma.png" alt="" /> */}
                <box-icon
                  type="solid"
                  name="graduation"
                  animation="spin-hover"
                  size="lg"
                  color="#98077b"
                ></box-icon>
                <h3>
                  <Link to="">DIT (Diploma in IT)</Link>
                </h3>
              </div>
              <div
                id="collapse9"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 1 Year </b>
                  <br />
                  We will cover in this course: Office Automation, Network
                  Essential, VB.Net, SQL, Programming C and CPP, Java and many
                  more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-bs-toggle="collapse"
                href="#collapse10"
              >
                <box-icon
                  type="solid"
                  name="inbox"
                  animation="spin-hover"
                  size="lg"
                  color="#010483"
                ></box-icon>
                {/* <img src="assets/img/courses/cit.png" alt="" /> */}
                <h3>
                  <Link to="">CIT (Certificate in IT)</Link>
                </h3>
              </div>
              <div
                id="collapse10"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 6 Months </b>
                  <br />
                  We will cover in this course: Office Automation, Network
                  Essential, VB.Net, SQL, Web Programming and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="550"
                data-bs-toggle="collapse"
                href="#collapse11"
              >
                {/* <img src="assets/img/courses/ece.png" alt="" /> */}
                <box-icon
                  type="solid"
                  name="extension"
                  animation="spin-hover"
                  size="lg"
                  color="#85b904"
                ></box-icon>

                <h3>
                  <Link to="">ECE (Early Childhood Education)</Link>
                </h3>
              </div>
              <div
                id="collapse11"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 1 Year </b>
                  <br />
                  We will cover in this course: History, Theories and techniques
                  for Teaching and Learning, Applying Theories to Practice and
                  many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-bs-toggle="collapse"
                href="#collapse12"
              >
                <box-icon
                  type="logo"
                  name="microsoft"
                  animation="spin-hover"
                  size="lg"
                  color="#0c84ed"
                ></box-icon>
                {/* <img src="assets/img/courses/MSOffice.png" alt="" /> */}
                <h3>
                  <Link to="">Office Automation</Link>
                </h3>
              </div>
              <div
                id="collapse12"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Basics of Computer, MS Word, MS
                  Power Point, MS Excel and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="650"
                data-bs-toggle="collapse"
                href="#collapse13"
              >
                <box-icon
                  type="solid"
                  name="building-house"
                  animation="spin-hover"
                  size="lg"
                  color="#780404"
                ></box-icon>
                {/* <img src="assets/img/courses/Autocad.png" alt="" /> */}
                <h3>
                  <Link to="">AutoCAD 2D-3D</Link>
                </h3>
              </div>
              <div
                id="collapse13"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 3 Months </b>
                  <br />
                  We will cover in this course: Installation of autCAD, Uses of
                  Commands, uses in Civil Engineering, Electrical Engineering,
                  Mechanical Engineering, Draw 3D Orbit, Navigations and Model,
                  Customise Rendering, Materials and Lights and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="700"
                data-bs-toggle="collapse"
                href="#collapse14"
              >
                <box-icon
                  type="logo"
                  name="php"
                  animation="spin-hover"
                  size="lg"
                  color="gray"
                ></box-icon>
                {/* <img src="assets/img/courses/laravel.png" alt="" /> */}
                <h3>
                  <Link to="">Website Development using PHP and Laravel</Link>
                </h3>
              </div>
              <div
                id="collapse14"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 6 Months </b>
                  <br />
                  We will cover in this course: JavaScript basics, HTML and CSS,
                  Postgre Database, PHP, Laravel Framework and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="750"
                data-bs-toggle="collapse"
                href="#collapse15"
              >
                <box-icon
                  type="solid"
                  name="component"
                  animation="spin-hover"
                  size="lg"
                  color="green"
                ></box-icon>
                {/* <img src="assets/img/courses/candcpp.png" alt="" /> */}
                <h3>
                  <Link to="">C & Cpp Programming</Link>
                </h3>
              </div>
              <div
                id="collapse15"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Basics of Programming Language,
                  concepts of C Language, and CPP.
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="800"
                data-bs-toggle="collapse"
                href="#collapse16"
              >
                <box-icon
                  type="logo"
                  name="java"
                  animation="spin-hover"
                  size="lg"
                  color="#343c39"
                ></box-icon>
                {/* <img src="assets/img/courses/JavaIcon.png" alt="" /> */}
                <h3>
                  <Link to="">Java Programming</Link>
                </h3>
              </div>
              <div
                id="collapse16"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Basics of Programming Language,
                  Basic Concepts of Java, OOP Concepts and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="850"
                data-bs-toggle="collapse"
                href="#collapse17"
              >
                <box-icon
                  name="network-chart"
                  animation="spin-hover"
                  size="lg"
                  color="#010483"
                ></box-icon>
                {/* <img src="assets/img/courses/cisco.png" alt="" /> */}
                <h3>
                  <Link to="">CISCO Certification</Link>
                </h3>
              </div>
              <div
                id="collapse17"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Network Fundamentals, network
                  topology architectures, IPv4 and IPv6 addressing and
                  subnetting, CCNA Exam Preparation and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="900"
                data-bs-toggle="collapse"
                href="#collapse18"
              >
                <box-icon
                  type="logo"
                  name="netlify"
                  animation="spin-hover"
                  size="lg"
                  color="#097ba1"
                ></box-icon>
                {/* <img src="assets/img/courses/network.png" alt="" /> */}
                <h3>
                  <Link to="">Network Essential</Link>
                </h3>
              </div>
              <div
                id="collapse18"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Network Fundamentals, network
                  topology architectures, IPv4 and IPv6 addressing and
                  subnetting, troubleshooting and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="950"
                data-bs-toggle="collapse"
                href="#collapse19"
              >
                <box-icon
                  type="solid"
                  name="hard-hat"
                  animation="spin-hover"
                  size="lg"
                  color="orangered"
                ></box-icon>

                {/* <img src="assets/img/courses/Linux.png" alt="" /> */}
                <h3>
                  <Link to="">Linux</Link>
                </h3>
              </div>
              <div
                id="collapse19"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Linux installation,
                  Configuration, Directories, Commands, Scripting Guidelines,
                  Working with Linux, File Sharing and FTP and many more!
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div
                className="icon-box"
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-bs-toggle="collapse"
                href="#collapse20"
              >
                <box-icon
                  type="solid"
                  name="calculator"
                  animation="spin-hover"
                  size="lg"
                  color="green"
                ></box-icon>
                <img src="assets/img/courses/Accounting.png" alt="" />
                <h3>
                  <Link to="">Computerized Accounting</Link>
                </h3>
              </div>
              <div
                id="collapse20"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <b> Duration: 2 Months </b>
                  <br />
                  We will cover in this course: Advance Excel, Basics of
                  Accounting, Quickbooks and Peachtree and many more!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
