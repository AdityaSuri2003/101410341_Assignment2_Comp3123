import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/employees/${id}`, employee);
      alert('Employee updated successfully');
      navigate('/employees');
    } catch (error) {
      alert('Failed to update employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">Save</button>
        <button
          type="button"
          className="btn btn-secondary mt-3 ml-2"
          onClick={() => navigate('/employees')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
