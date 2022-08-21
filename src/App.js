
import ExpenseItem from "./Components/ExpenseItem";


function App() {


  let expenses = [
    {
      id: 'e1',
      title: 'school fee',
      amount: 300,
      date: new Date(2021, 3, 26)
    }, 
    {
      id: 'e2',
      title: 'books',
      amount: 300,
      date: new Date(2021, 3, 26)
    }, 
    {
      id: 'e3',
      title: 'rent',
      amount: 300,
      date: new Date(2021, 3, 26)
    }, 
    {
      id: 'e4',
      title: 'school fee',
      amount: 300,
      date: new Date(2021, 3, 26)
    }, 

  ];

  // let expenseDate = new Date(2021, 3, 26);
  // let expenseTitle = "school fees";
  // let expenseAmount = 4000;

  return (

    <div>
      <h2>
        lets get started
      </h2>

      <ExpenseItem 
date={expenses[2].date} 
title={expenses[2].title} 
amount={expenses[2].amount}>
</ExpenseItem>

<ExpenseItem 
date={expenses[2].date} 
title={expenses[2].title} 
amount={expenses[2].amount}>
</ExpenseItem>

<ExpenseItem 
date={expenses[2].date} 
title={expenses[2].title} 
amount={expenses[2].amount}>
</ExpenseItem>

<ExpenseItem 
date={expenses[2].date} 
title={expenses[2].title} 
amount={expenses[2].amount}>
</ExpenseItem>



    </div>
    
  );
}

export default App;
