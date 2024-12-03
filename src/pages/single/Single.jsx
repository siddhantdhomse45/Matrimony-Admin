
// import "./single.css";
// import Sidebar from "../../component/sidebar/Sidebar";
// import Navbar from "../../component/navbar/Navbar";
// import Chart from "../../component/chart/Chart";
// import List from "../../component/table/Table";

// const Single = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             <div className="item">
//               <img
//                 src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//                 alt=""
//                 className="itemImg"
//               />
//               <div className="details">
//                 <h1 className="itemTitle">Jane Doe</h1>
//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">janedoe@gmail.com</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">+1 2345 67 89</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Address:</span>
//                   <span className="itemValue">
//                     Elton St. 234 Garden Yd. NewYork
//                   </span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">USA</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="right">
//             <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
//           </div>
//         </div>
//         <div className="bottom">
//         <h1 className="title">Last Transactions</h1>
//           <List/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;


import "./single.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Profile Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Profile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">johndoe@example.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 234 567 890</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location:</span>
                  <span className="itemValue">Mumbai, India</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">29</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Religion:</span>
                  <span className="itemValue">Hindu</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Profession:</span>
                  <span className="itemValue">Software Engineer</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Match Preferences:</span>
                  <span className="itemValue">Looking for someone with similar values and interests.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Activity (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recent Match Preferences</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
