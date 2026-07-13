import React, { useState } from "react";
import "./Login.css";
import * as authService from 'D:/Innowise/repos/innoclinic-app/src/features/auth/services/AuthService.js';

function Signup() {
  const [form, setForm] = useState({ email: '', firstname: '', lastname: '', password: '', confirmedPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.signUp(form);
    setForm({ email: '', firstname: '', lastname: '', password: '', confirmedPassword: '' });
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
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label>First name</label>
            <input
              type="firstname"
              placeholder="Enter your first name"
              value={form.firstname}
              onChange={(e) => setForm({...form, firstname: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label>Last name</label>
            <input
              type="lastname"
              placeholder="Enter your last name"
              value={form.lastname}
              onChange={(e) => setForm({...form, lastname: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirmed password</label>
            <input
              type="password"
              placeholder="Enter your password again"
              value={form.confirmedPassword}
              onChange={(e) => setForm({...form, confirmedPassword: e.target.value})}
              required
            />
          </div>

          <button type="submit">Sign up</button>
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