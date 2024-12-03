
// export const userColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "user",
//     headerName: "User",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.img} alt="avatar" />
//           {params.row.username}
//         </div>
//       );
//     },
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 230,
//   },

//   {
//     field: "age",
//     headerName: "Age",
//     width: 100,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];

// //temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     status: "passive",
//     age: 42,
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     status: "pending",
//     age: 45,
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     status: "active",
//     age: 16,
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     status: "passive",
//     age: 22,
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     status: "active",
//     age: 15,
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     status: "passive",
//     age: 44,
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     status: "active",
//     age: 36,
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "pending",
//     age: 65,
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "active",
//     age: 65,
//   },
// ];


// Define columns for the Matrimony DataTable
export const userColumns = [
  { field: "id", headerName: "Profile ID", width: 90 },
  {
    field: "profile",
    headerName: "Profile",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "age",
    headerName: "Age",
    width: 80,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "maritalStatus",
    headerName: "Marital Status",
    width: 150,
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// Sample Matrimony user data
export const userRows = [
  {
    id: 1,
    name: "Aryan Sharma",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "aryan.sharma@example.com",
    age: 28,
    gender: "Male",
    maritalStatus: "Single",
    location: "Mumbai, India",
    status: "active",
  },
  {
    id: 2,
    name: "Priya Patel",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "priya.patel@example.com",
    age: 26,
    gender: "Female",
    maritalStatus: "Single",
    location: "Ahmedabad, India",
    status: "active",
  },
  {
    id: 3,
    name: "Rahul Verma",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "rahul.verma@example.com",
    age: 32,
    gender: "Male",
    maritalStatus: "Divorced",
    location: "Delhi, India",
    status: "passive",
  },
  {
    id: 4,
    name: "Anjali Singh",
    img: "https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anjali.singh@example.com",
    age: 29,
    gender: "Female",
    maritalStatus: "Single",
    location: "Pune, India",
    status: "pending",
  },
  {
    id: 5,
    name: "Vikram Rao",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "vikram.rao@example.com",
    age: 35,
    gender: "Male",
    maritalStatus: "Widowed",
    location: "Hyderabad, India",
    status: "active",
  },
  {
    id: 6,
    name: "Meera Iyer",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "meera.iyer@example.com",
    age: 30,
    gender: "Female",
    maritalStatus: "Divorced",
    location: "Chennai, India",
    status: "passive",
  },
  {
    id: 7,
    name: "Rohit Deshmukh",
    img: "https://images.pexels.com/photos/2611693/pexels-photo-2611693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "rohit.deshmukh@example.com",
    age: 27,
    gender: "Male",
    maritalStatus: "Single",
    location: "Nashik, India",
    status: "active",
  },
  {
    id: 8,
    name: "Sneha Kulkarni",
    img: "https://images.pexels.com/photos/1427417/pexels-photo-1427417.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sneha.kulkarni@example.com",
    age: 25,
    gender: "Female",
    maritalStatus: "Single",
    location: "Bangalore, India",
    status: "active",
  },
  {
    id: 9,
    name: "Ankit Yadav",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ankit.yadav@example.com",
    age: 33,
    gender: "Male",
    maritalStatus: "Single",
    location: "Lucknow, India",
    status: "pending",
  },
  {
    id: 10,
    name: "Riya Mehta",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "riya.mehta@example.com",
    age: 28,
    gender: "Female",
    maritalStatus: "Single",
    location: "Surat, India",
    status: "active",
  },
];
