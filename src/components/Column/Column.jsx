import React from "react";
import "./Column.css";

const Column = ({ item, maxExpense, today }) => {
  const chartHeight = `${Math.round((item.amount / maxExpense) * 10)}rem`;

  return (
    <div className="column">
      <h4 className="day">{item.day}</h4>
      <div
        className={`column-chart ${today === item.day ? "today" : "not-today"}`}
        style={{ height: chartHeight }}
      />
      <div className="amount">{`$${item.amount}`}</div>
    </div>
  );
};

export default Column;
