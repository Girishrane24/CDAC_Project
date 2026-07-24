// import "./Home.css";
// import bgImage from "../../assets/images/hospital.webp";
// import { Link } from "react-router-dom";
// import Footer from "../../components/layout/Footer";

// function Home() {
//   return (
//     <>
//       {/* Header */}

//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
//         <div className="container">

//           <a className="navbar-brand fw-bold fs-3" href="#">
//             🏥 Hospital Management System
//           </a>

//           <Link to="/register" className="btn btn-light fw-bold px-4">
//   Registration
// </Link>

//         </div>
//       </nav>

//       {/* Hero Section */}

//       <section
//         className="hero-section"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="overlay">

//           <div className="container">

//             <div className="row align-items-center">

//               {/* Left Side */}

//               <div className="col-lg-7 text-grey">

//                 <h1 className="display-4 fw-bold mb-4">
//                   Welcome to CarePoint Hospital System
//                 </h1>

//                 <p className="lead">
//                   Hospital Management System is a web application that helps
//                   hospitals manage doctors, patients, appointments,
//                   prescriptions, laboratory, pharmacy, billing and room
//                   allocation efficiently.
//                 </p>

//                 <p>
//                   This application is designed to reduce paperwork, improve
//                   patient care and provide secure management of hospital
//                   records.
//                 </p>

//               </div>

//               {/* Right Side */}

//               <div className="col-lg-5">

//                 <div className="card shadow-lg border-0 p-4 login-card">

//                   <h2 className="text-center text-primary mb-4">
//                     Login
//                   </h2>

//                   <form>

//                     <div className="mb-3">

//                       <label className="form-label">
//                         Name
//                       </label>

//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Name"
//                       />

//                     </div>

//                     <div className="mb-3">

//                       <label className="form-label">
//                         Email
//                       </label>

//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter Email"
//                       />

//                     </div>

//                     <button
//                       className="btn btn-primary w-100"
//                       type="submit"
//                     >
//                       Login
//                     </button>

//                   </form>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//         <Footer/>

//     </>
//   );
// }

// export default Home;


<!-- 
import "./Home.css";
import bgImage from "../../assets/images/hospital.webp";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">

          <a className="navbar-brand fw-bold fs-3" href="#">
            🏥 CarePoint Hospital System
          </a>

          {/* <Link
            to="/register"
            className="btn btn-light fw-bold px-4"
          >
            Patient Registration
          </Link> */}

        </div>
      </nav>

      {/* Hero Section */}

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay">

          <div className="container">

            <div className="row align-items-center">

              {/* Left Section */}

              <div className="col-lg-7 text-white">

                <h1 className="display-4 fw-bold mb-4">
                  Welcome to CarePoint Hospital Management System
                </h1>

                <p className="lead">
                  Our Hospital Management System helps hospitals efficiently
                  manage patients, doctors, appointments, billing,
                  laboratory services, pharmacy, rooms and medical records.
                </p>

                <p>
                  Secure, reliable and user-friendly software designed to
                  simplify hospital operations and improve patient care.
                </p>

              </div>

              {/* Login Card */}

              <div className="col-lg-5">

                <div className="card shadow-lg border-0 p-4 login-card">

                  <h2 className="text-center text-primary mb-4">
                    Login
                  </h2>

                  <form>

                    {/* Email */}

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

                    {/* Password */}

                    <div className="mb-3">

                      <label className="form-label">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                      />

                    </div>

                    {/* Remember Me */}

                    <div className="d-flex justify-content-between align-items-center mb-3">

                  
                      <Link
                        to="/forgot-password"
                        className="text-decoration-none"
                      >
                        Forgot Password?
                      </Link>

                    </div>

                    {/* Login Button */}

                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Login
                    </button>

                  </form>

                  <hr />

                  <div className="text-center">

                    <p className="mb-2">
                      New Patient?
                    </p>

                    <Link
                      to="/register"
                      className="btn btn-outline-primary w-100"
                    >
                      Register Here
                    </Link>

                  </div>

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
