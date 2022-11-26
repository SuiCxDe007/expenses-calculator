import './ExpnseForm.css'
import {useState} from "react";

const ExpenseForm = (props) =>{
   const [userInput, setUserInput] =  useState({
        enteredTitle : '',
        enteredAmount : '',
        EnteredDate : ''
    })

    const titleChangeHandler = (event) =>{
       setUserInput((prevState => {
           return {
               ...prevState,
               enteredTitle: event.target.value
           }
       }))
    }
    const amountChangeHandler = (event) =>{
        setUserInput((prevState => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }}
        ))
    }
    const dateChangeHandler = (event) =>{

        setUserInput((prevState)=>{
          return {
              ...prevState,
              EnteredDate: event.target.value
          };
        });
    }

    const onSubmitHandler = (event) =>{
       event.preventDefault();
       const ExpenseData = {
           title : userInput.enteredTitle,
           amount : +userInput.enteredAmount,
           date : new Date(userInput.EnteredDate)
       }
       props.onSaveExpenseData(ExpenseData);
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            EnteredDate: ''
        })
    }

    return <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={userInput.EnteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions"><button type='submit' onClick={props.onCancel}>Cancel</button><button type='submit'>Add Expense</button></div>
    </form>
}

export default ExpenseForm;