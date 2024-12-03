import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import './logout.css'
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("authToken"); 
    sessionStorage.clear(); 
    
    navigate("/login");
  };

  return (
    <div className="log1">
    <Sidebar />
    <div className="logContainer1">
      <Navbar />
    <div className="logout">
      <h2>Are you sure you want to log out?</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </div>
    </div>
  );
};

export default Logout;
