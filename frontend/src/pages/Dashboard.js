// src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getUsage } from '../utils/api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [usageData, setUsageData] = useState([]);

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await getUsage();
        setUsageData(response.data);
      } catch (error) {
        console.error('Error fetching usage data:', error);
      }
    };
    fetchUsage();
  }, []);

  const chartData = {
    labels: usageData.map(item => item.session_start),
    datasets: [
      {
        label: 'Data Used (MB)',
        data: usageData.map(item => item.data_used),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'User Data Usage Over Time' },
    },
  };

  return (
    <Container className="mt-4">
      <h2>Dashboard</h2>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Line data={chartData} options={options} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>Total Users: {usageData.length}</Card.Text>
              <Card.Text>Total Data Used: {usageData.reduce((sum, item) => sum + item.data_used, 0)} MB</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
