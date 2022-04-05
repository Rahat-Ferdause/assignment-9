import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div>
      <h1>DashBoard Section</h1>
      <div className="flex justify-center my-10 gap-4">
        <div className="mx-4">
          <LineChart width={700} height={500} data={data} stroke="#8884d8">
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Line dataKey={"investment"}></Line>
            <Line dataKey={"sell"}></Line>
            <Line dataKey={"revenue"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </LineChart>
        </div>
        <div className="mx-4">
          <BarChart width={700} height={500} data={data} stroke="#8884d8">
            <Bar dataKey={"investment"} fill="#8884d8"></Bar>
            <Bar dataKey={"sell"} fill="#8884d8"></Bar>
            <Bar dataKey={"revenue"} fill="#8884d8"></Bar>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
