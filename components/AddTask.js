import React, { Component } from "react";
import TodoItems from "./TodoItems";
import TodoList from "./TodoList";
import utilStyles from '../styles/utils.module.css'
import AddTaskItems from "./AddTaskItems";



class AddTask extends Component {
  constructor(props) {
      super(props);
      
      this.state =  {
          items: []
        };

      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }

  saveStateToLocalStorage = () => { 
    localStorage.setItem('state', JSON.stringify(this.state)); 
  } 
  
  // Fetch data from local storage 
  getStateFromLocalStorage = () => { 
    let data = localStorage.getItem('state'); 
    if(data !== undefined) { 
      this.setState(JSON.parse(data)); 
    }
    else{
      this.saveStateToLocalStorage();
    } 
  } 
  
  componentDidMount() { 
    // Fetch data from local storage 
    this.getStateFromLocalStorage(); 
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
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });

        this.saveStateToLocalStorage
       
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
     });

     this.saveStateToLocalStorage
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
      <AddTaskItems entries={this.getStateFromLocalStorage()}
                 delete={this.deleteItem}/>
    </div>
  );
}
}

export default AddTask;