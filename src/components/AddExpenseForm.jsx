import React, { useState } from 'react';


function AddExpenseForm({ onAddExpense }) {
    const [formData, setFormData] = useState({
      expenses: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newExpense = {
        ...formData,
        id: Date.now(),
        amount: parseFloat(formData.amount),
        date: formData.date || new Date().toISOString().split('T')[0]
      };
      onAddExpense(newExpense);
      setFormData({ expenses: '', description: '', category: '', amount: '', date: '' });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="expenses"
          value={formData.expenses}
          onChange={handleChange}
          placeholder="Expenses"
          required
        />
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">Add Expense</button>
      </form>
    );
  }

  export default AddExpenseForm;