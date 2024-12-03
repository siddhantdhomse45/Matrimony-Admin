
// import "./chart.css";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "January", Total: 1200 },
//   { name: "February", Total: 2100 },
//   { name: "March", Total: 800 },
//   { name: "April", Total: 1600 },
//   { name: "May", Total: 900 },
//   { name: "June", Total: 1700 },
// ];

// const Chart = ({ aspect, title }) => {
//   return (
//     <div className="chart">
//       <div className="title2">{title}</div>
//       <ResponsiveContainer width="100%" aspect={aspect}>
//         <AreaChart
//           width={730}
//           height={250}
//           data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//           <defs>
//             <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" stroke="gray" />
//           <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="Total"
//             stroke="#8884d8"
//             fillOpacity={1}
//             fill="url(#total)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;


import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", NewUsers: 150, Matches: 300 },
  { name: "February", NewUsers: 200, Matches: 350 },
  { name: "March", NewUsers: 170, Matches: 290 },
  { name: "April", NewUsers: 220, Matches: 400 },
  { name: "May", NewUsers: 180, Matches: 320 },
  { name: "June", NewUsers: 210, Matches: 450 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="titles">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={450}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="newUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="matches" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5722" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF5722" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="NewUsers"
            stroke="#4CAF50"
            fillOpacity={1}
            fill="url(#newUsers)"
          />
          <Area
            type="monotone"
            dataKey="Matches"
            stroke="#FF5722"
            fillOpacity={1}
            fill="url(#matches)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
