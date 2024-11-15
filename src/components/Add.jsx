import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveEmpAPI } from '../services/allAPI';

const Add = () => {
  const [empDetailes, setEmpDetailes] = useState({
    username: "",
    email: "",
    status: ""
  });
  
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    status: ""
  });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      return "Email must contain '@'.";
    } else if (!email.includes('.com')) {
      return "Email must contain '.com'.";
    }
    return ""; // No error
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handleEmployee = async () => {
    const { username, email, status } = empDetailes;

    let hasError = false;
    const newErrors = { username: "", email: "", status: "" };

    if (!username) {
      newErrors.username = "Username is required.";
      hasError = true;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      hasError = true;
    } else {
      const emailError = validateEmail(email);
      if (emailError) {
        newErrors.email = emailError;
        hasError = true;
      }
    }

    if (!status) {
      newErrors.status = "Please select a status.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      try {
        const result = await saveEmpAPI(empDetailes);
        if (result.status >= 200 && result.status < 300) {
          alert("Employee details added successfully");
        } else {
          console.error(result);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <div className="shadow p-4" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
        <h1 style={{ textAlign: 'center' }}>Add Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Username:</label>
            <input
              onChange={e => setEmpDetailes({ ...empDetailes, username: e.target.value })}
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
            />
            {errors.username && <small className="text-danger">{errors.username}</small>}
          </div>
          <div className="mb-2">
            <label>Email:</label>
            <input
              onChange={e => setEmpDetailes({ ...empDetailes, email: e.target.value })}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          <div className="mb-3">
            <label>Status:</label>
            <select
              name="status"
              className="form-control"
              onChange={e => setEmpDetailes({ ...empDetailes, status: e.target.value })}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && <small className="text-danger">{errors.status}</small>}
          </div>
          <button onClick={handleEmployee} className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Add;
