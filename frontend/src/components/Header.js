import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Employee Management</Link>
      <div className="ml-auto">
        <Link className="btn btn-primary mr-2" to="/employees">Employees</Link>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Header;
