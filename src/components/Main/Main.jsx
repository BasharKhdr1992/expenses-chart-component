import React from "react";
import "./Main.css";
import expenses from "../../data.json";
import Column from "../Column/Column";
import Footer from "../Footer/Footer";

const Main = () => {
  const maxExpense = Math.max(...expenses.map((expense) => expense.amount));
  const days = expenses.map((item) => item.day);
  const todayIndex = new Date().getDay();
  const today = days[todayIndex === 0 ? days.length - 1 : todayIndex - 1];
  return (
    <div className="main">
      <h1 className="main-title">Spending - Last 7 days</h1>
      <div className="column-wrapper">
        {expenses.map((item, index) => {
          return (
            <Column
              key={index}
              item={item}
              maxExpense={maxExpense}
              today={today}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
