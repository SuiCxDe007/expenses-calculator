import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
const Expenses = (props) => {

return (
    <Card>
        {props.expenses.map(expense => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}/>
        })}
    </Card>
)
}

export default Expenses;