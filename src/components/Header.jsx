import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <div>
      <nav className="navbar p-4 navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder fs-5 text-white " to="/">EMPLOYEE MANAGEMENT APP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fw-bolder" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/home" aria-current="page">HOME</Link>
              </li>
              <li className="nav-item">
              <Link to="/add" className="btn btn-success nav-link text-white">
             ADD EMPLOYEE
          </Link>
                {/* <Link className="nav-link text-white" to="/add">ADD EMPLOYEE</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header