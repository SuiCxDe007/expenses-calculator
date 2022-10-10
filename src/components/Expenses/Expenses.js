import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import {useState} from "react";
const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020')

    const onSelectedYearHandler = (data) => {
        setSelectedYear(data);
    }

return (
    <div> <ExpensesFilter selected={selectedYear} selectedYear={onSelectedYearHandler} className={'expenses-filter'}/>
    <Card>
        {props.expenses.map(expense => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}/>
        })}
    </Card>
    </div>
)
}

export default Expenses;