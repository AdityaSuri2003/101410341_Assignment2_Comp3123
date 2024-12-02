import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/employees', employee);
      alert('Employee added successfully');
      navigate('/employees');
    } catch (error) {
      alert('Failed to add employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Employee</h2>
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
        <button type="submit" className="btn btn-primary mt-3">Save</button>
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

export default AddEmployee;
