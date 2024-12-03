// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import "./table.css";
// const List = () => {
//   const rows = [
//     {
//       id: 1143155,
//       product: "Acer Nitro 5",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 785,
//       method: "Cash on Delivery",
//       status: "Approved",
//     },
//     {
//       id: 2235235,
//       product: "Playstation 5",
//       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Michael Doe",
//       date: "1 March",
//       amount: 900,
//       method: "Online Payment",
//       status: "Pending",
//     },
//     {
//       id: 2342353,
//       product: "Redragon S101",
//       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 35,
//       method: "Cash on Delivery",
//       status: "Pending",
//     },
//     {
//       id: 2357741,
//       product: "Razer Blade 15",
//       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Jane Smith",
//       date: "1 March",
//       amount: 920,
//       method: "Online",
//       status: "Approved",
//     },
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Harold Carol",
//       date: "1 March",
//       amount: 2000,
//       method: "Online",
//       status: "Pending",
//     },
//   ];
//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Tracking ID</TableCell>
//             <TableCell className="tableCell">Product</TableCell>
//             <TableCell className="tableCell">Customer</TableCell>
//             <TableCell className="tableCell">Date</TableCell>
//             <TableCell className="tableCell">Amount</TableCell>
//             <TableCell className="tableCell">Payment Method</TableCell>
//             <TableCell className="tableCell">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>

//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={row.img} alt="" className="images" />
//                   {row.product}
//                 </div>

//               </TableCell>
//               <TableCell className="tableCell">{row.customer}</TableCell>
//               <TableCell className="tableCell">{row.date}</TableCell>
//               <TableCell className="tableCell">{row.amount}</TableCell>
//               <TableCell className="tableCell">{row.method}</TableCell>
//               <TableCell className="tableCell">
//                 <span className={`status ${row.status}`}>{row.status}</span>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;




import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

const List = () => {
  const rows = [
    {
      id: 1143155,
      user: "Alice Johnson",
      img: "https://cdn.pixabay.com/photo/2020/09/23/16/40/electronics-5596480_1280.jpg",
      match: "John Smith",
      date: "1 March",
      plan: "Premium",
      status: "Approved",
    },
    {
      id: 2235235,
      user: "Michael Doe",
      img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
      match: "Emma Watson",
      date: "2 March",
      plan: "Standard",
      status: "Pending",
    },
    {
      id: 2342353,
      user: "Sarah Lee",
      img: "https://cdn.pixabay.com/photo/2017/08/31/09/01/woman-2699801_1280.jpg",
      match: "James Brown",
      date: "3 March",
      plan: "Premium",
      status: "Approved",
    },
    {
      id: 2357741,
      user: "Sophie Turner",
      img: "https://cdn.pixabay.com/photo/2021/03/21/14/17/girl-6112204_1280.jpg",
      match: "Peter Parker",
      date: "4 March",
      plan: "Free",
      status: "Pending",
    },
    {
      id: 2342355,
      user: "Harold Carol",
      img: "https://cdn.pixabay.com/photo/2021/02/16/15/52/designer-6021491_1280.jpg",
      match: "Lily Collins",
      date: "5 March",
      plan: "Premium",
      status: "Approved",
    },
    {
      id: 2358789,
      user: "Sophie Williams",
      img: "https://cdn.pixabay.com/photo/2023/07/28/15/37/ai-generated-8155472_1280.jpg",
      match: "Peter Marker",
      date: "14 March",
      plan: "Premium",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Match</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Subscription Plan</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="images" />
                  {row.user}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.match}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.plan}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
