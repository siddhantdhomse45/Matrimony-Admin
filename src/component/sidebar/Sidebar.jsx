
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ReportIcon from '@mui/icons-material/Report';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

import { useContext } from "react";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar1">
      <div className="top1">
          <span className="logo1">Matrimony </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title5">MAIN</p>
          <li>
            <DashboardIcon className="icon1" />
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>Dashboard</span>
            </Link>
          </li>
          <p className="title5">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon1" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/matchmaking" style={{ textDecoration: "none" }}>
            <li>
              <FavoriteIcon className="icon1" />
              <span>Matchmaking Statist</span>
            </li>
          </Link>
          <Link to="/subscription" style={{ textDecoration: "none" }}>
          <li>
            <SubscriptionsIcon className="icon1" />
            <span>Subscription Plans</span>
          </li>
          </Link>
          <Link to="/user" style={{ textDecoration: "none" }}>
          <li>
            <PersonIcon className="icon1" />
            <span>User Activities</span>
          </li>
          </Link>
          <Link to="/report" style={{ textDecoration: "none" }}>
            <li>
              <ReportIcon className="icon1" />
              <span>Report</span>
            </li>
            </Link>
            <Link to="/matches" style={{ textDecoration: "none" }}>
            <li>
              <FavoriteIcon className="icon1" />
              <span>Matches</span>
            </li>
          </Link>
          {/* <li>
            <CreditCardIcon className="icon1" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon1" />
            <span>Delivery</span>
            
          </li>
          <p className="title5">USEFUL</p>
          <li>
            <InsertChartIcon className="icon1" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon1" />
            <span>Notifications</span>
          </li>
          <p className="title5">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon1" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon1" />
            <span>Logs</span>
          </li> */}
          {/* <li>
            <SettingsApplicationsIcon className="icon1" />
            <span>Settings</span>
          </li> */}
          <p className="title5">USER</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <LoginIcon className="icon1" />
              <span>Login</span>
            </li>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
            <li>

              <AppRegistrationIcon className="icon1" />
              <span>Register</span>
            </li>
            </Link>
            <Link to="/account" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxIcon className="icon1" />
              <span>Account</span>
            </li>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon1" />
            <span>Profile</span>
          </li>
          </Link>
          
          <Link to="/logout" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon1" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      </div>
        
  );
};

export default Sidebar;


// import "./sidebar.css";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import GroupsIcon from "@mui/icons-material/Groups";
// import ChatIcon from "@mui/icons-material/Chat";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";

// import { useContext } from "react";

// const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);

//   return (
//     <div className="sidebar1">
//       <div className="top1">
//         <span className="logo1">MatrimonyAdmin</span>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title5">MAIN</p>
//           <li>
//             <DashboardIcon className="icon1" />
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <span>Dashboard</span>
//             </Link>
//           </li>
//           <p className="title5">MANAGEMENT</p>
//           <Link to="/profiles" style={{ textDecoration: "none" }}>
//             <li>
//               <PersonOutlineIcon className="icon1" />
//               <span>User Profiles</span>
//             </li>
//           </Link>
//           <Link to="/matches" style={{ textDecoration: "none" }}>
//             <li>
//               <FavoriteIcon className="icon1" />
//               <span>Matches</span>
//             </li>
//           </Link>
//           <Link to="/groups" style={{ textDecoration: "none" }}>
//             <li>
//               <GroupsIcon className="icon1" />
//               <span>Groups</span>
//             </li>
//           </Link>
//           <Link to="/chats" style={{ textDecoration: "none" }}>
//             <li>
//               <ChatIcon className="icon1" />
//               <span>Chats</span>
//             </li>
//           </Link>
//           <p className="title5">EVENTS</p>
//           <Link to="/events" style={{ textDecoration: "none" }}>
//             <li>
//               <EventNoteIcon className="icon1" />
//               <span>Events</span>
//             </li>
//           </Link>
//           <p className="title5">ANALYTICS</p>
//           <li>
//             <InsertChartIcon className="icon1" />
//             <span>Statistics</span>
//           </li>
//           <li>
//             <NotificationsNoneIcon className="icon1" />
//             <span>Notifications</span>
//           </li>
//           <p className="title5">SETTINGS</p>
//           <li>
//             <SettingsApplicationsIcon className="icon1" />
//             <span>Preferences</span>
//           </li>
//           <p className="title5">USER</p>
//           <Link to="/profile" style={{ textDecoration: "none" }}>
//             <li>
//               <AccountCircleOutlinedIcon className="icon1" />
//               <span>My Profile</span>
//             </li>
//           </Link>
//           <li>
//             <ExitToAppIcon className="icon1" />
//             <span>Logout</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

