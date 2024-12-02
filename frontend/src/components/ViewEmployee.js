import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await API.get(`/employees/${id}`);
        setEmployee(data);
      } catch (error) {
        alert('Failed to fetch employee details');
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Employee Details</h2>
      <p><strong>First Name:</strong> {employee.firstName}</p>
      <p><strong>Last Name:</strong> {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <button className="btn btn-primary" onClick={() => navigate('/employees')}>Back</button>
    </div>
  );
};

export default ViewEmployee;
