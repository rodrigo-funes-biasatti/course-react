import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
    const onSaveExpenseDataHandler = expenseData => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expense);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
};

export default NewExpense;