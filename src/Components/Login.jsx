import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from 'react-router-dom'
import "./Style/Register.css";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div  className=" my-5 container d-flex align-items-center justify-content-center ">
      <div className="d-flex flex-column justify-content-center align-items-center glass">
        <h3 className="welcome my-3">Login now</h3>
        <small className="text-center pb-4 explore-heading">
          Explore More by connecting with us.
        </small>

        <form className="py-1 ">
          <div className="textbox flex flex-column g text-center ">
            <div style={{marginLeft:"10px"}}>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              className="form-control form-control-lg inputpassword"
              onChange={onChange}
              placeholder="Enter a valid email address"
              required
            />
            <input
              value={credentials.password}
              
              onChange={onChange}
              className=" mb-3 mt-4 form-control form-control-lg inputpassword"
              type="password"
              placeholder="Password"
              name="password"
            />
            </div>
            <button
              className="btn btn-lg signup-button"
              onClick={(e) => {
                e.preventDefault();
                // Handle signup logic here
              }}
            >
              Login
            </button>
          </div>

          <div className="text-center py-3">
            <span style={{ color: "#ccc2c2" }}>
              Doesn't Register?
              <Link to="/register" className="register">
                {" "}
                Register Now
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
