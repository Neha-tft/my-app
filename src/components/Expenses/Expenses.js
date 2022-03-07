import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart  from './ExpensesChart';
import  './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
    const [filteredYear,setFilteredYear]=useState('2020');
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    };
     
     const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;

    });
    
    return (
    
       <div>
    
      <Card className='expenses'>
          <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}></ExpensesFilter>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses}></ExpensesList>
           

    
    {/* <ExpenseItem title={props.items[1].title} 
    amount={props.items[1].amount} 
    date={props.items[1].date}></ExpenseItem> 
    
    <ExpenseItem title={props.items[2].title} 
    amount={props.items[2].amount} 
    date={props.items[2].date}></ExpenseItem>
    
    <ExpenseItem title={props.items[3].title} 
    amount={props.items[3].amount} 
    date={props.items[3].date}></ExpenseItem> */}
    </Card>
    </div>
    );
};
export default Expenses;