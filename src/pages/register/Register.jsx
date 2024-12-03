import React, { useState } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    profileImage: null,
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "password") {
      validatePasswordStrength(value);
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, profileImage: e.target.files[0] }));
  };

  const validatePasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Moderate");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("User registered successfully:", formData);
    setError("");
    alert("Registration successful! Email confirmation sent.");
  };

  return (
    <div className="accounts1">
    <Sidebar />
    <div className="accountsContainer">
      <Navbar />
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleInputChange}
        />
        <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
          Password Strength: {passwordStrength}
        </p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          required
          onChange={handleInputChange}
        />
        <select name="gender" required onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="date" name="dob" required onChange={handleInputChange} />
        <select name="maritalStatus" required onChange={handleInputChange}>
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        <select name="religion" required onChange={handleInputChange}>
          <option value="">Select Religion</option>
          <option value="hindu">Hindu</option>
          <option value="muslim">Muslim</option>
          <option value="christian">Christian</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="caste"
          placeholder="Caste (Optional)"
          onChange={handleInputChange}
        />
        <input type="file" name="profileImage" onChange={handleFileChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Register;
