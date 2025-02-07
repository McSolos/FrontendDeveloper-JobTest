import React from "react";
import "./Transactions.css";

const transactions = [
  { id: 1, date: "2025-02-07", description: "Grocery Store", amount: -50.75 },
  { id: 2, date: "2025-02-06", description: "Salary Deposit", amount: 1500.00 },
  { id: 3, date: "2025-02-05", description: "Electricity Bill", amount: -100.00 },
  { id: 4, date: "2025-02-04", description: "Online Shopping", amount: -200.00 }
];

const Transactions = () => {
  return (
    <div className="transactions-container">
      <h2>Transaction History</h2>
      <table className="transactions-table" aria-label="Transaction History">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount < 0 ? "negative" : "positive"}>
                {transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
