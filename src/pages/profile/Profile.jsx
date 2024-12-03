import React, { useState } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import "./profile.css";

const Profile = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      fullName: "Aryan Sharma",
      gender: "Male",
      age: 28,
      location: "Mumbai, India",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      gender: "Female",
      age: 25,
      location: "California",
      status: "Inactive",
    },
  ]);

  const [newProfile, setNewProfile] = useState({
    fullName: "",
    gender: "",
    dob: "",
    contactNumber: "",
    email: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    location: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewProfile((prevData) => ({ ...prevData, profileImage: e.target.files[0] }));
  };

  const addProfile = (e) => {
    e.preventDefault();

    const age = new Date().getFullYear() - new Date(newProfile.dob).getFullYear();
    const id = profiles.length + 1;

    setProfiles((prevProfiles) => [
      ...prevProfiles,
      {
        id,
        fullName: newProfile.fullName,
        gender: newProfile.gender,
        age,
        location: newProfile.location,
        status: "Active",
      },
    ]);

    alert("Profile added successfully!");
    setNewProfile({
      fullName: "",
      gender: "",
      dob: "",
      contactNumber: "",
      email: "",
      maritalStatus: "",
      religion: "",
      caste: "",
      location: "",
      profileImage: null,
    });
  };

  const deactivateProfile = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === id ? { ...profile, status: "Inactive" } : profile
      )
    );
  };

  return (
    <div className="prof">
      <Sidebar />
      <div className="profContainer">
        <Navbar />
        <div className="profiles">
          <h2>Profiles</h2>

          {/* Profile Table */}
          <table className="profile-table">
            <thead>
              <tr>
                <th>Profile ID</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile.id}>
                  <td>{profile.id}</td>
                  <td>{profile.fullName}</td>
                  <td>{profile.gender}</td>
                  <td>{profile.age}</td>
                  <td>{profile.location}</td>
                  <td>{profile.status}</td>
                  <td>
                    <button onClick={() => alert(`Viewing profile of ${profile.fullName}`)}>
                      View Profile
                    </button>
                    <button onClick={() => deactivateProfile(profile.id)}>Deactivate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Profile Form */}
          <h3>Add New Profile</h3>
          <form className="add-profile-form" onSubmit={addProfile}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={newProfile.fullName}
              onChange={handleInputChange}
            />
            <select name="gender" required value={newProfile.gender} onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              name="dob"
              required
              value={newProfile.dob}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              required
              value={newProfile.contactNumber}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={newProfile.email}
              onChange={handleInputChange}
            />
            <select
              name="maritalStatus"
              required
              value={newProfile.maritalStatus}
              onChange={handleInputChange}
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
            <select
              name="religion"
              required
              value={newProfile.religion}
              onChange={handleInputChange}
            >
              <option value="">Select Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="caste"
              placeholder="Caste (Optional)"
              value={newProfile.caste}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              value={newProfile.location}
              onChange={handleInputChange}
            />
            <input
              type="file"
              name="profileImage"
              onChange={handleFileChange}
            />
            <button type="submit">Add Profile</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Profile;
