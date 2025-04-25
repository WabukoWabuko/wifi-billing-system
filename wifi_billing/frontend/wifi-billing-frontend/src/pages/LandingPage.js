import React from 'react';
import { Link } from 'react-router-dom';

// Landing page for the WiFi billing system! I’m making it a 10/5 star UI/UX for the presentation! – Me
const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">WiFi Billing</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5" style={{ background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeIn">Seamless WiFi Billing for Everyone</h1>
          <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
            Starting in Kenya, scaling globally. Pay with M-Pesa, track usage, and manage your WiFi with ease.
          </p>
          <Link to="/register" className="btn btn-light btn-lg animate__animated animate__fadeIn animate__delay-2s">Get Started Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 animate__animated animate__fadeInUp">
                <div className="card-body text-center">
                  <i className="bi bi-wallet2 display-4 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">M-Pesa Payments</h5>
                  <p className="card-text">Pay for your WiFi plans seamlessly with M-Pesa, designed for Kenyan users.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up display-4 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Usage Tracking</h5>
                  <p className="card-text">Monitor your data usage in real-time with interactive graphs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="card-body text-center">
                  <i className="bi bi-globe display-4 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Scalable System</h5>
                  <p className="card-text">Built to handle millions of users with Django, React, and Celery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Who Can Use This?</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100 animate__animated animate__fadeInLeft">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Normal Users</h5>
                  <p className="card-text">
                    Regular users can purchase WiFi plans, track data usage, and manage their accounts. Register as a user to access your personalized dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100 animate__animated animate__fadeInRight">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Resellers</h5>
                  <p className="card-text">
                    Resellers can manage customers, issue vouchers, and track sales. During registration, select the reseller role to unlock these features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0">© 2025 WiFi Billing System. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </footer>

      {/* Add Animate.css and Bootstrap Icons for animations and icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </div>
  );
};

export default LandingPage;
