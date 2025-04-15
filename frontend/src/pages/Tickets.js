// src/pages/Tickets.js

import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { getTickets } from '../utils/api';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await getTickets();
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Ticket Tracking</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>User</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.subject}</td>
              <td>{ticket.user.username}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.created_at}</td>
              <td>
                <Button variant="primary" size="sm">View</Button>{' '}
                <Button variant="success" size="sm">Resolve</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Tickets;
