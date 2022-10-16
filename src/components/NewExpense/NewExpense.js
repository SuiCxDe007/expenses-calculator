import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


const NewExpense = (props) =>{

    const [showForm,setShowForm] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       props.onAddExpense(expenseData)
        setShowForm(false)
    }
    const onCancelHandler = () =>{
        setShowForm(false)
    }

    const onAddNewExpenseHandler = () =>{
        setShowForm(true)
    }

    return <div className='new-expense'>
        {!showForm && <button onClick={onAddNewExpenseHandler}>Add New Expense</button>}
        {showForm && <ExpenseForm onCancel={onCancelHandler} showForm={showForm} onSaveExpenseData={saveExpenseDateHandler} />}
    </div>
}

export default NewExpense;