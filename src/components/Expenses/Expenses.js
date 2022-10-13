import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../GeneralComponents/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('');
    const expenses = props.expenses;
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>    
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenses.map(expense => <ExpenseItem key={props.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    );
};

export default Expenses;