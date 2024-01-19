import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Style/Register.css";

export default function Register() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  function isValidEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Test the email address against the regular expression pattern.
    return regex.test(email); // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  }

  const submitForm = async(e)=>{
    e.preventDefault();

    if(credentials.email === ""){
      alert("Please enter the email address");
    } else if(credentials.password === ""){
      alert("Please enter the password")
    } else {
        if(!isValidEmail(credentials.email)) {
          alert("Invalid email");
          return;
        } else {
          alert("reached succes");
          
          const response = await fetch(`${port}/authenticate/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
    
          const json = await response.json();
          
          if (response.status === 500 || response.status === 400) {
            if (response.status === 500) {
              alert("Innternal server error");
            } else {
              alert(json.msg);
            }
          } else {
           
            alert('Great Account Created Successfully');
            navigate("/login");
          }
        }
    }
  }


  return (
    <div  className=" my-5 container d-flex align-items-center justify-content-center ">
      <div className="d-flex flex-column justify-content-center align-items-center glass">
        <h3 className="welcome my-3">Register now</h3>
        <small className="text-center pb-4 explore-heading">
          Explore More by connecting with us.
        </small>

        <form className="py-1 " onSubmit={(e)=>(submitForm(e))}>
          <div className="textbox flex flex-column g text-center ">
            <div style={{marginLeft:"10px"}}>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              className="form-control form-control-lg inputpassword"
              onChange={onChange}
              style={{fontSize:"2.9px"}}
              placeholder="Enter a valid email address"
              required
            />
            <input
              value={credentials.password}
              
              onChange={onChange}
              className=" mb-3 mt-4 form-control form-control-lg inputpassword"
              type="password"
              style={{fontSize:"2.9px"}}
              placeholder="Password"
              name="password"
            />
            </div>
            <button
              className="btn btn-lg signup-button"
              onClick={(e) => {
                e.preventDefault();
                alert("hii")
                submitForm(e)
                // Handle signup logic here
              }}
            >
              Sign Up
            </button>
          </div>

          <div className="text-center py-3">
            <span style={{ color: "#ccc2c2" }}>
              Already Register?
              <Link to="/login" className="register">
                {" "}
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
