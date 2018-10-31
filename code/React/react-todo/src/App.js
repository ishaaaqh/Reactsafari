import React, { Component } from 'react';
import './App.css';
import Todolist from './todolist';
import TodoItems from './todoItems';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items:[],
      currentItem:{text:'',  key:''}
    }
  }
  handleInput =e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addTodo = e =>{
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      console.log(this.state.items)
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
     <React.Fragment>
        <Todolist  addTodo={this.addTodo}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}/>
        <TodoItems entries = {this.state.items}/>      
      </React.Fragment>
      </div>
    );
  }
}

export default App;
