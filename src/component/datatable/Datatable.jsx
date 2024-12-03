// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./datatable.css";

// const Datatable = () => {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>

//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New User
//         <Link to="/users/new" className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Datatable;



// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Sidebar from "../sidebar/Sidebar";
// import Navbar from "../navbar/Navbar";
// import "./datatable.css";

// const Datatable = () => {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Actions",
//       width: 250,
//       renderCell: (params) => {
//         return (
          
//           <div className="cellAction">
//             <Link to={`/profiles/${params.row.id}`} style={{ textDecoration: "none" }}>
//               <div className="viewButton">View Profile</div>
//             </Link>
//             <Link to={`/matches/${params.row.id}`} style={{ textDecoration: "none" }}>
//               <div className="matchButton">View Matches</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="data1">
//     <Sidebar />
//     <div className="dataContainer1">
//       <Navbar />
//     <div className="datatable">
//       <div className="datatableTitle">
//         Manage Profiles
//         <Link to="/profiles/new" className="link">
//           Add New Profile
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Datatable;

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../datatablesource";
import Sidebar from "../sidebar/Sidebar";
// import Navbar from "../navbar/Navbar";
import "./datatable.css";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <div className="cellAction">
        <Link to={`/profiles/${params.row.id}`} style={{ textDecoration: "none" }}>
          <button className="viewButton">View Profile</button>
        </Link>
        <Link to={`/matches/${params.row.id}`} style={{ textDecoration: "none" }}>
          <button className="matchButton">View Matches</button>
        </Link>
        <button
          className="deleteButton"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </button>
      </div>
      
      ),
    },
  ];

  return (
    <div className="dataContainer">
      {/* <Sidebar /> */}
      {/* <div className="mainContent">
        <Navbar /> */}
        <div className="datatable">
          <div className="datatableHeader">
            <h3>Manage Profiles</h3>
            <Link to="/profiles/new" className="addNewButton">
              Add New Profile
            </Link>
          </div>
          <DataGrid
            className="datagrid1"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    // </div>
  );
};

export default Datatable;

