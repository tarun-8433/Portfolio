import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaEye } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const certificatesData = [
  {
    id: 1,
    title: "Node.js Certification",
    issuer: "Infosys",
    year: "2023",
    description: "Completed Node.js certification covering backend development.",
    certificateLink: "/certificates/node js certificate.pdf", // place in public folder
  },
  {
    id: 2,
    title: "React Certification",
    issuer: "Infosys",
    year: "2023",
    description: "Proficient in React.js for building interactive UIs.",
    certificateLink: "/certificates/react js certificate.pdf",
  },
   {
    id: 3,
    title: "JavaScript Certification",
    issuer: "Infosys",
    year: "2023",
    description: "JavaScript fundamentals and advanced topics.",
    certificateLink: "/certificates/javascript certificate.pdf",
  },
  {
    id: 4,
    title: "Python Certification",
    issuer: "University of Michigan",
    year: "2023",
    description: "Python programming basics, functions, and file handling.",
    certificateLink: "/certificates/python certificate.pdf",
  },
  {
    id: 5,
    title: "Data Visualization & Dashboard",
    issuer: "Coursera",
    year: "2023",
    description: "Creating dashboards and visualizing data effectively.",
    certificateLink: "/certificates/Data visualization and Dashboards with excel.pdf",
  },
  {
    id: 6,
    title: "Excel Data Analytics",
    issuer: "Microsoft",
    year: "2023",
    description: "Excel skills for data analytics and reporting.",
    certificateLink: "https://example.com/excel-analytics-cert.pdf",
  },
  {
    id: 7,
    title: "Generative AI",
    issuer: "Intel AI Festival",
    year: "2023",
    description: "Understanding and creating generative AI models.",
    certificateLink: "/certificates/generative ai certificate.png",
  },
  {
    id: 8,
    title: "Responsible AI",
    issuer: "Intel AI Festival",
    year: "2023",
    description: "Ethical considerations and practices in AI development.",
    certificateLink: "/certificates/responsible ai certificate.png",
  },
  {
    id: 9,
    title: "Space AI",
    issuer: "Space AI Conference",
    year: "2023",
    description: "AI applications in space technology and research.",
    certificateLink: "/certificates/space ai certificate.png",
  },
  {
    id: 10,
    title: "Angular Certification",
    issuer: "Infosys",
    year: "2023",
    description: "Frontend development with Angular framework.",
    certificateLink: "/certificates/Angular certificate.pdf",
  },
];

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleView = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center mb-5 fw-bold">My Certificates</h2>
      <div className="row">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={cert.id * 100}
          >
            <div className="card shadow-sm rounded-4 h-100 hover-effect">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{cert.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {cert.issuer} - {cert.year}
                </h6>
                <p className="card-text flex-grow-1">{cert.description}</p>
                <div className="d-flex gap-3 mt-3">
                  <Button
                    variant="outline-primary"
                    onClick={() => handleView(cert)}
                    title="View Certificate"
                  >
                    <FaEye className="me-1" /> View
                  </Button>
                  <a
                    href={cert.certificateLink}
                    download
                    className="btn btn-primary"
                    title="Download Certificate"
                  >
                    <FaDownload className="me-1" /> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedCert?.certificateLink?.endsWith(".pdf") ? (
            <iframe
              src={selectedCert.certificateLink}
              width="100%"
              height="500px"
              title="Certificate Viewer"
              frameBorder="0"
            ></iframe>
          ) : (
            <img
              src={selectedCert?.certificateLink}
              alt={selectedCert?.title}
              className="img-fluid rounded"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <a
            href={selectedCert?.certificateLink}
            download
            className="btn btn-primary"
          >
            <FaDownload className="me-1" /> Download
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Certificates;
