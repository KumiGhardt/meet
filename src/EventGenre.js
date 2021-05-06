import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { setData(() => getData()); }, [events]);
  
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const summary = events.map((event) => {
        const eventSummary = event.summary;
        return { eventSummary };
      });
  
      const data = genres.map((genre) => {
     const value = summary.filter((summary) =>
          summary.eventSummary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
  
      return data.filter((data) => data.value >= 1);
    };
  
    const colors = ['#003f5c', '#bc5090', '#58508d', '#ff6361', '#2f4b7c' ];
  
    return (
      <ResponsiveContainer height={400} width='90%'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#632c21"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
  
  export default EventGenre;