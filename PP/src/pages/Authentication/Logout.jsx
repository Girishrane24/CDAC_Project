import "./Auth.css";
import bgImage from "../../assets/images/hospital.webp";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">

        <div className="container">

          <div className="row justify-content-center align-items-center vh-100">

            <div className="col-md-5">

              <div className="card shadow-lg border-0 p-4 auth-card text-center">

                <h2 className="text-success mb-3">
                  Logout Successful
                </h2>

                <p>
                  You have been logged out successfully.
                </p>

                <Link
                  to="/"
                  className="btn btn-primary mt-3"
                >
                  Login Again
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Logout;