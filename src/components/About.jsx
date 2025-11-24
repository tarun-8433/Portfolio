import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProgressBar } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5" id="about">
      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt="Tarun Shukla"
            className="img-fluid rounded-4 shadow-lg"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2 className="mb-3">About Me</h2>
          <p>Hello! I'm <strong>Tarun Shukla</strong>, a passionate full-stack web developer.</p>
          <p>
            I hold an MCA from Chandigarh University and specialize in building responsive, scalable applications using the MERN stack.
          </p>
          <p>
            I’ve worked on a hospital management system, NewsHub, and various AI and data visualization projects. My goal is to create seamless user experiences.
          </p>
          <a href="/Tarun-Shukla-Resume.pdf" download className="btn btn-primary mt-3">
            Download Resume
          </a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12" data-aos="fade-up">
          <h3 className="mb-4">My Skills</h3>
          <p>React</p>
          <ProgressBar now={90} label="90%" className="mb-3" />
          <p>Node.js</p>
          <ProgressBar now={85} label="85%" className="mb-3" />
          <p>MongoDB</p>
          <ProgressBar now={80} label="80%" className="mb-3" />
          <p>Python</p>
          <ProgressBar now={75} label="75%" className="mb-3" />
          <p>JavaScript</p>
          <ProgressBar now={90} label="90%" className="mb-3" />
        </div>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="col-md-12">
          <h3 className="mb-4">My Journey</h3>
          <ul className="timeline list-unstyled">
            <li><strong>MCA</strong> – Chandigarh University (2025)</li>
            <li><strong>BCA</strong> – Dr Bhimrao Ambedkar University (2023)</li>
            <li><strong>12th</strong> –  Janata Inter College (2020)</li>
            <li><strong>10th</strong> – Awagarh Public Sen.Sec. School (2016)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
