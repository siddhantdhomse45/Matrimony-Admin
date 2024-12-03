import React from "react";
import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 120;
  const diff = 15;
  
  switch (type) {
    case "user":
      data = {
        title: "NEW MEMBERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon2"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              marginLeft:'75px'
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "MATCHES MADE",
        isMoney: false,
        link: "View all matches",
        icon: (
          <FavoriteIcon
            className="icon2"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
               marginLeft:'75px'
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "NET REVENUE",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "AVAILABLE BAL.",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

//   switch (type) {
//     case "user":
//       data = {
//         title: "USERS",
//         isMoney: false,
//         link: "See all users",
//         icon: (
//           <PersonOutlinedIcon
//             className="icon"
//             style={{
//               color: "crimson",
//               backgroundColor: "rgba(255, 0, 0, 0.2)",
//             }}
//           />
//         ),
//       };
//       break;
//     case "order":
//       data = {
//         title: "ORDERS",
//         isMoney: false,
//         link: "View all orders",
//         icon: (
//           <ShoppingCartOutlinedIcon
//             className="icon"
//             style={{
//               backgroundColor: "rgba(218, 165, 32, 0.2)",
//               color: "goldenrod",
//             }}
//           />
//         ),
//       };
//       break;
//     case "earning":
//       data = {
//         title: "EARNINGS",
//         isMoney: true,
//         link: "View net earnings",
//         icon: (
//           <MonetizationOnOutlinedIcon
//             className="icon"
//             style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
//           />
//         ),
//       };
//       break;
//     case "balance":
//       data = {
//         title: "BALANCE",
//         isMoney: true,
//         link: "See details",
//         icon: (
//           <AccountBalanceWalletOutlinedIcon
//             className="icon"
//             style={{
//               backgroundColor: "rgba(128, 0, 128, 0.2)",
//               color: "purple",
//             }}
//           />
//         ),
//       };
//       break;
//     default:
//       break;
//   }

  return (
    <div className="widget">
      <div className="lefts">
        <span className="title">{data.title}</span>
        <span className="counters">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="links">{data.link}</span>
      </div>
      <div className="rights">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

