import React from 'react';


function ExpenseTable({ expenses, onDelete, onSort}) {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort('expenses')}>Expenses</th>
            <th onClick={() => onSort('description')}>Description</th>
            <th onClick={() => onSort('category')}>Category</th>
            <th>Amount</th>
            <th>Date</th>
            {onDelete && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.expenses}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              {onDelete && (
                <td>
                  <button onClick={() => onDelete(expense.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default ExpenseTable;