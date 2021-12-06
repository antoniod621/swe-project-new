import React, { Component } from "react";
import TodoItems from "./TodoItems";
import TodoList from "./TodoList";
import utilStyles from '../../styles/utils.module.css'
import AddTaskItems from "./AddTaskItems";



class AddTask extends Component {

  
    constructor(props) {
        super(props);

        
        
        this.state =  {
            items: JSON.parse(localStorage.getItem('items')) || []
          }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    
    addItem(e) {
        if (this._inputElement.value !== "") {
          var task = (this._inputElement.value)
          var newItem = {
              text: (<section className={utilStyles.headingLg} >
            
            <p>{task}</p>
            <div>
                <TodoList/>
            </div>
            
        </section>),
        key: Date.now()};
       
          this.setState(
              {items: this.state.items.concat(newItem)},
              () => {
                localStorage.setItem('items', JSON.stringify(this.state.items))
              }
            
          );
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
           
        e.preventDefault();
      }
    
    deleteItem(key) {
       var filteredItems = this.state.items.filter(function (item) {
         return (item.key !== key);
       });
      
       this.setState({
         items: filteredItems
       },
       () => {
         localStorage.setItem('items', JSON.stringify(this.state.items))
       });
    }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder="Enter Task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <AddTaskItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default AddTask;