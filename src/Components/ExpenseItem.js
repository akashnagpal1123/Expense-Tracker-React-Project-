import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate"
function ExpenseItem(props) {



    return(
        <div className="expense-item">
            <ExpensDate date = {props.date} />
            <div className="expense-item__description"> 
                <h2>{ props.title }</h2>
                <h2 className="expense-item__price">{ props.amount } </h2>
            </div>
        </div>
    );

}

export default ExpenseItem;