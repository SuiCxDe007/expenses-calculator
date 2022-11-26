import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const onSelectedYearHandler = (data) => {
        setSelectedYear(data);
    }
    const filteredExpenses = props.expenses.filter(data => data.date.getFullYear().toString() === selectedYear);

return (
    <div> <ExpensesFilter selected={selectedYear} selectedYear={onSelectedYearHandler} className={'expenses-filter'}/>
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
    </div>
)
}

export default Expenses;