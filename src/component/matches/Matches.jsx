import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./matches.css";


const matchData = [
  {
    id: 1,
    firstName: "Aryan",
    lastName: "Sharma",
    age: 28,
    profilePic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    location: "Mumbai, india",
  },
  {
    id: 2,
    firstName: "Priya",
    lastName: "Patel",
    age: 26,
    profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    location: "Pune, India",
  },
  {
    id: 3,
    firstName: "Rahul",
    lastName: "Verma",
    age: 29,
    profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    firstName: "Vikram",
    lastName: "Rao",
    age: 25,
    profilePic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    location: "Nagpur, India",
  },
  {
    id: 5,
    firstName: "Meera",
    lastName: "Iyer",
    age: 27,
    profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    location: "Banglore, India",
  }, 
  {
    id: 6,
    firstName: "Heena",
    lastName: "Gupta",
    age: 30,
    profilePic: "https://cdn.pixabay.com/photo/2021/03/21/14/17/girl-6112204_1280.jpg",
    location: "Kolkata, India",
  },
];

const Matches = () => {
  const [matches, setMatches] = useState(matchData);

  return (
    <div className="accounts1">
    <Sidebar />
    <div className="accountsContainer1">
      <Navbar />
    <div className="matches-container">
      <h2>Matches</h2>
      <div className="matches-list">
        {matches.map((match) => (
          <div className="match-card" key={match.id}>
            <img src={match.profilePic} alt={`${match.firstName} ${match.lastName}`} className="match-image" />
            <div className="match-info">
              <h3>{`${match.firstName} ${match.lastName}`}</h3>
              <p>Age: {match.age}</p>
              <p>Location: {match.location}</p>
            </div>
            <div className="match-actions">
              <Link to={`/profile/${match.id}`}>
                <button className="view-buttons">View Profile</button>
              </Link>
              <button className="message-button">Send Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Matches;
