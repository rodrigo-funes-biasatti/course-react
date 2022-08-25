import './ExpenseDate.css'

function ExpenseDate (props) {  
    return (
        <div className='expense-date'>{props.date.toDateString()}</div>
    );
};

export default ExpenseDate;