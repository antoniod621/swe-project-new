import React, { Component } from "react";
 
class AddTaskItems extends Component {

  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <div 
              key={item.key}>{item.text}
              <button onClick={() => this.delete(item.key)} 
              key={item.key}>delete</button>
              </div>
              
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul >
          {listItems}
      </ul>
    );
  }
};
 
export default AddTaskItems;