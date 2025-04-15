import './App.css';
import React, { useState, useMemo } from 'react';
import AddExpenseForm from './components/AddExpenseForm.jsx';
import ExpenseTable from './components/ExpenseTable.jsx';

function App() {

  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });


  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedExpenses = useMemo(() => {
    let sortableExpenses = [...filteredExpenses];
    if (sortConfig.key) {
      sortableExpenses.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableExpenses;
  }, [filteredExpenses, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseTable 
        expenses={sortedExpenses} 
        onDelete={deleteExpense}
        onSort={requestSort}
      />
    </div>
  );
}


export default App;