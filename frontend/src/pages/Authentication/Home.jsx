import "./Home.css";
import bgImage from "../../assets/images/hospital.webp";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import Footer from "../../components/layout/Footer";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function Home() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await authService.login(data);

      const { token, role, name, email } = response.data;

      // Save user information
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);

      reset();
      if (role === "ADMIN") {
        navigate("/dashboard");
      } else {
        alert("Access Denied");
      }
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Invalid Email or Password");
    }
  };

  useEffect(() => {
    reset();
}, [reset]);

  return (
    <>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-3">
            <FaHeartbeat className="me-2" />
            CarePoint Hospital System
          </Link>

          {/* <Link
          to="/appointments/book"
          className="btn btn-primary ms-auto text-lg-center"
        >
          + Book Appointment
        </Link>  */}
        </div>
      </nav>

      {/* Hero */}

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center gy-5">
              {/* Left */}

              <div className="col-lg-7 text-white text-center text-lg-start">
                <h1 className="display-4 fw-bold mb-4">
                  Welcome to CarePoint Hospital Management System
                </h1>

                <p className="lead">
                  Our Hospital Management System helps hospitals efficiently
                  manage patients, doctors, appointments, billing, laboratory
                  services, pharmacy, rooms and medical records.
                </p>

                <p>
                  Secure, reliable and user-friendly software designed to
                  simplify hospital operations and improve patient care.
                </p>
              </div>

              {/* Login */}

              <div className="col-lg-5">
                <div className="card shadow-lg border-0 p-4 login-card">
                  {/* <h2 className="text-center text-primary mb-4">
                                        Login
                                    </h2> */}

                  <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>

                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Enter Email"
                        autoComplete="off"
                        {...register("email")}
                      />

                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>

                      <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Enter Password"
                        autoComplete="new-password"
                        {...register("password")}
                      />

                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>

                    <div className="d-flex justify-content-end mb-3">
                      <Link
                        to="/forgot-password"
                        className="text-decoration-none"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    <button className="btn btn-primary w-100" type="submit">
                      Login
                    </button>
                  </form>

                  {/* <hr />

                                    <div className="text-center">

                                        <p className="mb-2">
                                            New Patient?
                                        </p>

                                        <Link
                                            to="/patients/add"
                                            className="btn btn-outline-primary w-100"
                                        >
                                            Register Here
                                        </Link>

                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
