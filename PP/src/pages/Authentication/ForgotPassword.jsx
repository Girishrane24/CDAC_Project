import "./Auth.css";
import bgImage from "../../assets/images/hospital.webp";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">

            <div className="col-md-5">

              <div className="card shadow-lg border-0 p-4 auth-card">

                <h2 className="text-center text-primary mb-4">
                  Forgot Password
                </h2>

                <p className="text-center text-muted">
                  Enter your registered email address.
                </p>

                <form>

                  <div className="mb-3">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>

                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                  >
                    Send Reset Link
                  </button>

                </form>

                <div className="text-center mt-3">

                  <Link to="/">
                    Back to Login
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;