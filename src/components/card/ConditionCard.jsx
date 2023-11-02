// import React, { useEffect } from 'react';
// import './ccard.scss';
// import Plotly from 'plotly.js-basic-dist';
//
// const ConditionCard = ({ phLevel, alkalineLevel }) => {
//     useEffect(() => {
//         plotDonutChart();
//     }, []);
//
//     const plotDonutChart = () => {
//         const data = [
//             {
//                 labels: ['pH Level', 'Alkaline'],
//                 values: [phLevel, alkalineLevel],
//                 type: 'pie',
//                 marker: { colors: ['#0088FE', '#00C49F'] },
//                 hole: 0.4, // Controls the size of the hole to make it a donut chart
//             },
//         ];
//
//         const layout = {
//             showlegend: true,
//             legend: { x: 0, y: 1 },
//         };
//
//         Plotly.newPlot('donut-chart', data, layout);
//     };
//
//     return (
//         <div className="condition-card">
//             <div className="chart-container">
//                 <div id="donut-chart" style={{ width: '100%', height: '300px' }}></div>
//             </div>
//
//             <div className="text-container">
//                 <div className="ph-level">{`pH Level: ${phLevel}`}</div>
//                 <div className="alkaline-level">{`ALKALINE: ${alkalineLevel}`}</div>
//             </div>
//         </div>
//     );
// };
//
// export default ConditionCard;
