import './expense-item.scss';
import React from 'react';
import Droppable from '../droppable';
import Draggable from '../draggable'

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
  }
  handleChangeCategory(expense){
    console.log("handle change category:::::::", expense);
    this.props.expenseDelete(expense);
    expense.categoryID=this.props.categoryID;
    this.props.expenseInsert(expense);
  }
  render(){
    return(
      <Droppable containerClass ='expense-item' handleDrop = {this.handleChangeCategory}>
          {this.props.expenses[this.props.categoryID].map((expense,i) => 
          <Draggable expense={expense}>
            <div key={expense.id}>
              <p>{(expense.name)}</p>
              <button onClick={() => this.props.expenseDelete(expense)}> x </button>
            </div>
          </Draggable>
          )}
      </Droppable>
    );
  }
};

export default ExpenseItem;
