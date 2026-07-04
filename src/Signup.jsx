import React, { useState } from "react";
import "./Login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Signup Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create an account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>First name</label>
            <input
              type="firstname"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Last name</label>
            <input
              type="lastname"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Signup</button>
        </form>

        <div className="footer">
          <a href="/">Forgot Password?</a>
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;