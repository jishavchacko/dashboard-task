import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page H', uv: 3490, pv: 4300, amt: 3100,
	},
	{
    name: 'Page I', uv: 3490, pv: 4300, amt: 3000,
	},
	{
    name: 'Page J', uv: 3490, pv: 4300, amt: 2400,
	},
	{
    name: 'Page K', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page L', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page M', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page N', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page O', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page P', uv: 3490, pv: 4300, amt: 2100,
	},
	{
    name: 'Page Q', uv: 3490, pv: 4300, amt: 4100,
	},
	{
    name: 'Page R', uv: 3490, pv: 4300, amt: 3100,
	},
	{
    name: 'Page S', uv: 3490, pv: 4300, amt: 2700,
	},
	{
    name: 'Page T', uv: 3490, pv: 4300, amt: 2600,
	},
	{
    name: 'Page U', uv: 3490, pv: 4500, amt: 2400,
	},
	{
    name: 'Page V', uv: 3490, pv: 4800, amt: 2800,
	},
	{
    name: 'Page W', uv: 3490, pv: 4900, amt: 2600,
	},
	{
    name: 'Page X', uv: 3490, pv: 4950, amt: 2500,
	},
	{
    name: 'Page y', uv: 3490, pv: 4100, amt: 2300,
	},
	{
    name: 'Page z', uv: 3490, pv: 4300, amt: 200,
  },
];

 class BarchartComponent extends PureComponent {

  render() {
    return (
      <BarChart width={1000} height={200} data={data}>
				<Bar dataKey="uv" fill="#007bff" />
				<XAxis dataKey="name"/>
    		<YAxis dataKey="amt"/>
      </BarChart>
    );
  }
}

export default BarchartComponent
