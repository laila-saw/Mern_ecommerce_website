import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
    console.log(document.querySelector(".ResponsiveContainer"));
    return (
      <div className="chart">
        <h3 className="chartTitle ">{title}</h3>
        <ResponsiveContainer className="ResponsiveContainer" width="100%" aspect={4 / 2}>
          {/* aspect if the width is 4 unit the height will be 1 unit*/}
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {grid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="name" />
            <Tooltip />
  
            <Line type="monotone" dataKey={dataKey} stroke="var(--darkMainColor)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

export default Chart