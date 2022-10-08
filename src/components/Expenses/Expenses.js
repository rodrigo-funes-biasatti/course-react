import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../GeneralComponents/Card";

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Card className="expenses">{expenses.map(expense => <ExpenseItem key={props.id} title={expense.title} amount={expense.amount} date={expense.date} />)}</Card>
    );
};

export default Expenses;