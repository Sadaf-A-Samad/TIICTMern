import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../imgs/LogoSquare.png";
import { UserContext } from "../UserContext";

const Header = () => {
  // const [username, setUsername] = useState(null);

  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        // setUsername(userInfo.username);
        setUserInfo(userInfo);
      });
    });
  });

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="" />

            <span>
              TandoAllahyar Institute of <br />
              Information & Communication Technology
            </span>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/affiliation">
                  Affiliation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tiictblog">
                  Blog
                </Link>
              </li>
              {username && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">
                      Dashboard
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="" onClick={logout}>
                      Signout
                    </Link>
                  </li>
                </>
              )}
              {!username && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
