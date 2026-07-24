import "./Auth.css";
import bgImage from "../../assets/images/hospital.webp";
import { Link } from "react-router-dom";

function ResetPassword() {
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
                  Reset Password
                </h2>

                <form>

                  <div className="mb-3">

                    <label className="form-label">
                      New Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter New Password"
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />

                  </div>

                  <button
                    className="btn btn-success w-100"
                    type="submit"
                  >
                    Reset Password
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

export default ResetPassword;