import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEditAPI, updateEmpAPI } from '../services/allAPI';

const EditEmp = () => {
  const { id } = useParams();
  const [empDetails, setEmpDetails] = useState({ username: '', email: '', status: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const result = await getEditAPI(id);
        if (result.status >= 200 && result.status < 300) {
          setEmpDetails(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getEmployee();
  }, [id]);

  const handleUpdate = async () => {
    const { username, email, status } = empDetails;
    if (username && email && status) {
      try {
        const result = await updateEmpAPI(id, empDetails);
        if (result.status >= 200 && result.status < 300) {
         
          navigate('/');
          // alert('Employee updated successfully');
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Employee Details</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              value={empDetails.username}
              onChange={(e) => setEmpDetails({ ...empDetails, username: e.target.value })}
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-2">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={empDetails.email}
              onChange={(e) => setEmpDetails({ ...empDetails, email: e.target.value })}
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label>Status:</label>
            <select
              className="form-control"
              value={empDetails.status}
              onChange={(e) => setEmpDetails({ ...empDetails, status: e.target.value })}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button onClick={handleUpdate} className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmp;
