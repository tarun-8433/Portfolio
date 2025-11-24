import React, { useEffect } from "react";
import TypedText from "./TypedText";
import ScrollDownArrow from "./ScrollDownArrow";
import profilePic from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="row full-height">
          {/* Left */}
          <div className="col-md-6 d-flex align-items-center text-white ps-5" data-aos="fade-right">
            <div>
              <h2>Welcome to my portfolio</h2>
              <h1>Hello, I'm Tarun Shukla</h1>
              <h2>I am a <TypedText /></h2>

              <p className="mt-4 fs-5">
                This is my personal website. Discover my skill set, career achievements, and creative portfolio here.
              </p>
              <p className="fs-5">I have completed my MCA from Chandigarh University.</p>

              <div className="mt-4 d-flex gap-3 align-items-center">
                <a href="https://www.linkedin.com/in/tarun-shukla-8a79942b3" target="_blank">
                  <FaLinkedin size={30} className="social-icon" />
                </a>

                <a href="https://github.com/tarun-8433" target="_blank">
                  <FaGithub size={30} className="social-icon" />
                </a>

                <a href={resume} download="Tarun_Shukla_Resume.pdf" className="btn resume-btn">
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
            <img
              src={profilePic}
              alt="Tarun Shukla"
              className="img-fluid rounded-circle shadow"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
          </div>
        </div>

        <ScrollDownArrow />
      </div>
    </div>
  );
};

export default Home;
