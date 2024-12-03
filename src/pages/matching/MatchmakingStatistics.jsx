import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import './statistics.css';


const MatchmakingStatistics = () => {
 
  const [matchSuccessRate, setMatchSuccessRate] = useState(75); 
  const [dailyMatchesData, setDailyMatchesData] = useState([15, 22, 18, 30, 25, 35, 40]); 
  const [topProfiles, setTopProfiles] = useState([
    { id: 1, name: 'Aryan Sharma', matches: 65 },
    { id: 2, name: 'Vikram Rao', matches: 50 },
    { id: 3, name: 'Riya Mehta', matches: 20 },
    { id: 4, name: 'Anjali Singh', matches: 34 },

  ]);

 
  const lineChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Daily Matches",
        data: dailyMatchesData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="match">
    <Sidebar />
    <div className="matchContainer">
      <Navbar />
    <div className="matchmaking-stats">
      <div className="matchmaking-header">
        <h2>Matchmaking Statistics</h2>
      </div>

      <div className="stats-summary">
        <div className="match-success-rate">
          <h3>Match Success Rate</h3>
          <p>{matchSuccessRate}%</p>
        </div>
      </div>

      <div className="daily-matches-chart">
        <h3>Daily Matches</h3>
        <Line data={lineChartData} />
      </div>

      <div className="top-matching-profiles">
        <h3>Top Matching Profiles</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Matches</th>
            </tr>
          </thead>
          <tbody>
            {topProfiles.map((profile, index) => (
              <tr key={profile.id}>
                <td>{index + 1}</td>
                <td>{profile.name}</td>
                <td>{profile.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default MatchmakingStatistics;
