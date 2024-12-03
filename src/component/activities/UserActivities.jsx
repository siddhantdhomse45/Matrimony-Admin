import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./user.css";

const UserActivities = () => {
  const [activities, setActivities] = useState([
    { id: 1, type: "Profile Viewed", description: "Aryan Sharma viewed your profile", time: "2 minutes ago" },
    { id: 2, type: "Message Sent", description: "You sent a message to Anjali Singh", time: "15 minutes ago" },
    { id: 3, type: "Favorite Added", description: "You added Meera Iyer to your favorites", time: "30 minutes ago" },
    { id: 4, type: "Profile Viewed", description: "Ankit Yadav viewed your profile", time: "1 hour ago" },
    { id: 5, type: "Message Sent", description: "You sent a message to Rahul Verma", time: "2 hours ago" },
  ]);

  return (
    <div className="match">
    <Sidebar />
    <div className="matchContainer">
      <Navbar />
    <div className="user-activities">
      <h2>User Activities</h2>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-header">
              <span className="activity-type">{activity.type}</span>
              <span className="activity-time">{activity.time}</span>
            </div>
            <p className="activity-description">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default UserActivities;
