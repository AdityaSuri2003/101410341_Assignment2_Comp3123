import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await API.get('/employees');
        setEmployees(data);
      } catch (error) {
        alert('Failed to fetch employees');
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await API.delete(`/employees/${id}`);
        setEmployees(employees.filter((emp) => emp._id !== id));
      } catch (error) {
        alert('Failed to delete employee');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Employees List</h2>
      <Link to="/employees/add" className="btn btn-primary mb-3">Add Employee</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <Link to={`/employees/${employee._id}`} className="btn btn-info btn-sm mr-2">View</Link>
                <Link to={`/employees/edit/${employee._id}`} className="btn btn-warning btn-sm mr-2">Update</Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
