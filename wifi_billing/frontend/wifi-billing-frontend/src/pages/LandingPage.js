import React from 'react';
import { Link } from 'react-router-dom';

// Landing page for the WiFi billing system! I’m making it sleek and professional for the presentation! – Me
const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      {/* Header */}
      <header className="bg-dark text-white py-3">
        <div className="container">
          <h1 className="h3 mb-0">WiFi Billing System</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center py-5">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-4">Innovative, Scalable WiFi Billing</h2>
          <p className="lead mb-4">
            Empowering millions of users starting with Kenya! Pay with M-Pesa, track usage, and manage your WiFi seamlessly.
          </p>
          <Link to="/login" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-5">Why Choose Us?</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">M-Pesa Integration</h5>
                  <p className="card-text">Pay for your WiFi plans effortlessly with M-Pesa, tailored for Kenyan users.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">Real-Time Usage Tracking</h5>
                  <p className="card-text">Monitor your data usage with sleek graphs and stay in control.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">Scalable for Millions</h5>
                  <p className="card-text">Built to handle millions of users with Django, React, and Celery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 WiFi Billing System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
