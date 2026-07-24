
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row gy-4 text-center text-md-start">
          {/* About */}
          <div className="col-12 col-md-4">
            <h5>Hospital Management System</h5>
            <p className="text-white mb-0">
              Connecting patients, doctors, and administrators through one
              smart platform for efficient and reliable healthcare management.
            </p>
          </div>
    {/* Quick Links */}
          <div className="col-12 col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-12 col-md-4">
            <h5>Contact Us</h5>
            <p className="mb-1 text-light">📧 info@hospital.com</p>
            <p className="mb-1 text-light">📞 +91 9876543210</p>
            <p className="mb-0 text-light">📍 Pune, Maharashtra</p>
          </div>
        </div>

       

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Hospital Management System. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
