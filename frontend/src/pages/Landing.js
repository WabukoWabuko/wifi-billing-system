import React from 'react';
import { Container, Row, Col, Button, Card, Nav } from 'react-bootstrap'; // Removed Navbar
import { Link } from 'react-router-dom';
import { FaUser, FaDollarSign, FaTicketAlt, FaChartLine } from 'react-icons/fa';
import './Landing.css'; // Custom styles

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section text-center text-white">
        <Container>
          <h1 className="display-4">Welcome to WiFi Billing System</h1>
          <p className="lead">Manage your WiFi services with ease—track usage, handle billing, and support users seamlessly.</p>
          <div className="cta-buttons mt-4">
            <Button as={Link} to="/login" variant="primary" size="lg" className="me-3">Login</Button>
            <Button as={Link} to="/register" variant="outline-light" size="lg">Register</Button>
          </div>
        </Container>
      </header>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <Row>
            <Col md={3} className="text-center mb-4">
              <FaUser size={50} className="text-primary mb-3" />
              <h4>User Management</h4>
              <p>Efficiently manage user accounts, plans, and statuses in one place.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <FaDollarSign size={50} className="text-primary mb-3" />
              <h4>Seamless Billing</h4>
              <p>Automate billing and transactions with secure payment methods.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <FaTicketAlt size={50} className="text-primary mb-3" />
              <h4>Ticket Support</h4>
              <p>Track and resolve user issues with our ticketing system.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <FaChartLine size={50} className="text-primary mb-3" />
              <h4>Data Insights</h4>
              <p>Monitor usage and gain insights with detailed analytics.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Explore the System</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Dashboard</Card.Title>
                  <Card.Text>Screenshot of Dashboard: View usage analytics and summaries.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>User Management</Card.Title>
                  <Card.Text>Screenshot of User Management: Manage user accounts and plans.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Ticket Tracking</Card.Title>
                  <Card.Text>Screenshot of Ticket Tracking: Monitor and resolve support tickets.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Users Say</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>"This system made managing our WiFi users so easy! The analytics are a game-changer."</Card.Text>
                  <Card.Subtitle className="text-muted">— John D., Network Admin</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>"The ticketing system helped us resolve issues quickly. Highly recommend!"</Card.Text>
                  <Card.Subtitle className="text-muted">— Jane S., Support Manager</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>"Billing has never been smoother. The automation saves us hours every week."</Card.Text>
                  <Card.Subtitle className="text-muted">— Alex M., Business Owner</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-white text-center">
        <Container>
          <p>© 2025 WiFi Billing System. All rights reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="text-white">Register</Nav.Link>
            <Nav.Link href="mailto:support@wifibilling.com" className="text-white">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </div>
  );
};

export default Landing;
