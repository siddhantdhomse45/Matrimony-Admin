import React, { useState } from "react";
import './addprofile.css'

const AddProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Profile Data:", formData);
  
  };

  return (
    <div className="addProfile">
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
       
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;
