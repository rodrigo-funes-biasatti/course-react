import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../GeneralComponents/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const expenses = props.expenses;

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses =  props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear); 

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map((expense, index) => 
                    <ExpenseItem 
                      key={index} 
                      title={expense.title} 
                      amount={expense.amount} 
                      date={expense.date}
                      disable={true}
                      />
                    )}
            </Card>
        </div>
    );
};

export default Expenses;