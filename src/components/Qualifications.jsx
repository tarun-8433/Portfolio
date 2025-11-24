import React, { useEffect } from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const education = [
  {
    icon: <FaUniversity />,
    title: "MCA - Master of Computer Applications",
    place: "Chandigarh University",
    year: "2021 - 2023",
    description: "Specialized in Full Stack Development and Software Engineering.",
  },
  {
    icon: <FaUniversity />,
    title: "BCA - Bachelor of Computer Applications",
    place: "Dr.Bhim Rao Ambedkar University",
    year: "2018 - 2021",
    description: "Studied core computer science subjects and web development.",
  },
  {
    icon: <FaSchool />,
    title: "Senior Secondary (12th)",
    place: "Janata Inter College",
    year: "2016 - 2018",
    description: "Completed with focus on PCM (Physics, Chemistry, Math).",
  },
  {
    icon: <FaSchool />,
    title: "Secondary (10th)",
    place: "Awagarh Public Sen. Sec School",
    year: "2014 - 2016",
    description: "Completed with distinction in all major subjects.",
  },
];

const Qualifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="qualifications"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
      className="container-fluid py-5"
    >
      <div className="container">
        <h2 className="text-center mb-5">🎓 My Educational Journey</h2>
        <div className="row">
          {education.map((qual, index) => (
            <div
              key={index}
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card shadow h-100 border-0 rounded-4 p-4 bg-light bg-opacity-75 text-dark">
                <div className="d-flex align-items-center mb-3">
                  <div className="fs-2 me-3 text-primary">{qual.icon}</div>
                  <div>
                    <h5 className="mb-1">{qual.title}</h5>
                    <small className="text-muted">
                      {qual.place} • {qual.year}
                    </small>
                  </div>
                </div>
                <p className="mb-0">{qual.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
