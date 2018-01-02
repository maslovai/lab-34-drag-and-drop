import React from 'react';
class Droppable extends React.Component {
  constructor(props){
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }
  handleDrop(e){
      e.preventDefault();
      let payload = e.dataTransfer.getData('text/json');
      let expense = JSON.parse(payload);
      console.log('in Drop::::::', expense);
    //   this.props.handleDrop(expense);
  }
  handleDragOver(e){
    e.preventDefault();
    console.log('in Drag Over:::::')
  }
  render(){
    return(
    <div className = {this.props.containerClass}
        onDrop = {this.handleDrop}
        onDragOver = {this.handleDragOver}
    >
        {this.props.children}
    </div>
    )
  }    
}
export default Droppable;