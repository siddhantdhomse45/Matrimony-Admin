import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Report from "./component/report/Report";
import Logout from './pages/logout/Logout' 
import Account from './pages/account/Account'
import AddProfile from "./component/addProfile/AddProfile";
import Matches from "./component/matches/Matches";
import MatchmakingStatistics from './pages/matching/MatchmakingStatistics'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import './index.css'
import SubscriptionPlans from "./pages/subscription/SubscriptionPlans";
import UserActivities from "./component/activities/UserActivities";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="subscription" element={<SubscriptionPlans />} />
            <Route path="addProfile" element={<AddProfile />} />
            <Route path="register" element={<Register />} />
            <Route path="user" element={<UserActivities />} />
            <Route path="account" element={<Account />} />
            <Route path="report" element={<Report />} />
            <Route path="matchmaking" element={<MatchmakingStatistics />} />
            <Route path="profile" element={<Profile />} />
            
            <Route path="users">
              <Route index element={<List />} />
              {/* <Route path=":userId" element={<Single />} /> */}
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route
                path="matches"
                element={<Matches inputs={userInputs} title="Add New User" />}
              />
            </Route>
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
