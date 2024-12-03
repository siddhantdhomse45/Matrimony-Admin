
// import "./featured.css";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// const Featured = () => {
//   return (
//     <div className="featured">
//       <div className="tops">
//         <h1 className="title1">Total Revenue</h1>
//         <MoreVertIcon fontSize="small" />
//       </div>
//       <div className="bottoms">
//         <div className="featuredChart">
//           <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
//         </div>
//         <p className="title1">Total sales made today</p>
//         <p className="amount1">$420</p>
//         <p className="desc">
//           Previous transactions processing. Last payments may not be included.
//         </p>
//         <div className="summarys">
//           <div className="item">
//             <div className="itemTitle1">Target</div>
//             <div className="itemResult negative">
//               <KeyboardArrowDownIcon fontSize="small"/>
//               <div className="resultAmount">$12.4k</div>
//             </div>
//           </div>
//           <div className="item">
//             <div className="itemTitle1">Last Week</div>
//             <div className="itemResult positive">
//               <KeyboardArrowUpOutlinedIcon fontSize="small"/>
//               <div className="resultAmount">$12.4k</div>
//             </div>
//           </div>
//           <div className="item">
//             <div className="itemTitle1">Last Month</div>
//             <div className="itemResult positive">
//               <KeyboardArrowUpOutlinedIcon fontSize="small"/>
//               <div className="resultAmount">$12.4k</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;


import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="tops">
        <h1 className="title1">Platform Statistics</h1> 
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottoms">
        <div className="featuredChart">
          <CircularProgressbar value={85} text={"85%"} strokeWidth={5} />
        </div>
        <p className="title1">Total revenue generated today</p>
        <p className="amount3">$1,250</p>
        <p className="desc">
          Last payments may not be included. Data is still processing.
        </p>
        <div className="summarys">
          <div className="item">
            <div className="itemTitle1">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$15k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle1">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$9.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle1">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$40k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
