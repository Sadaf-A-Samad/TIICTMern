import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";
import Layout from "./pages/Layout";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IndexPage from "./pages/IndexPage";
import TiictBlog from "./pages/TiictBlog";
import AboutUs from "./pages/AboutUs";
import Affiliation from "./pages/Affiliation";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Courses from "./pages/Courses";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/affiliation"} element={<Affiliation />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/team"} element={<Team />} />
        <Route path={"/tiictblog"} element={<TiictBlog />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
