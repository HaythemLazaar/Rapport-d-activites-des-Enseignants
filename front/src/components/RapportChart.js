import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


function RapportChart(props) {
  return (
    <div className='data-vis'>
      <div className='data-legend'>
        <div className='legend' style={{backgroundColor: COLORS[0]}}>Enseignement</div>
        <div className='legend' style={{backgroundColor: COLORS[1]}}>PFE</div>
        <div className='legend' style={{backgroundColor: COLORS[2]}}>PI</div>
      </div>
      <div className='pie-chart'>
        <PieChart width={400} height={400}>
          <Pie
            data={props.activitesData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {props.activitesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
    
  )
}

export default RapportChart