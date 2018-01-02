import React from 'react';
class Draggable extends React.Component {
  constructor(props){
      super(props);
      this.handleDragStart = this.handleDragStart.bind(this);
    }
    handleDragStart(e){
      let expense = JSON.stringify(this.props.expense);
      e.dataTransfer.setData('text/json', expense);  
      console.log('in handleDragStart::::', expense); 
    }
    render(){
      return(
        <div draggable="true" onDragStart={this.handleDragStart}>
          {this.props.children}
        </div>
      )
    }    
}
export default Draggable;