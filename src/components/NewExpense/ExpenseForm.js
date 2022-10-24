import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = props => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    // const [userInputs, setUserInputs] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = event => {
        setTitle(event.target.value);
        // setUserInputs({
        //     ...userInputs,
        //     enteredTitle: event.target.value
        // })

        // setUserInputs((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    }

    const amountChangeHandler = event => {
        setAmount(event.target.value);
        // setUserInputs({
        //     ...userInputs,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = event => {
        setDate(event.target.value);
        // setUserInputs({
        //     ...userInputs,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        clearInputs();
        // console.log(event);
    }

    const clearInputs = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2022-01-01" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm