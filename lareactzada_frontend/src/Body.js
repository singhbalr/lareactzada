import React from 'react';
import './App.css';
import Content from './Content'
import './test.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Frontpage from './components/Frontpage'

class Body extends React.Component{
  constructor(){
    super();
    this.state = {
      todo : [
        {
          id : 1,
          title : "Go out",
          name_owner : "raj",
          done : false
        },
        {
          id : 2,
          title: "Go to work",
          name_owner : "Beads",
          done : false
        },
        {
          id : 3,
          title: "Go home",
          name_owner : "Gabriel",
          done : false
        }
      ]
    }
    console.log(this.state.todo);
  }
  
  changeTitle(title){
    this.setState({title})
  }

  checkmark(id){
    
    this.setState({todos: this.state.todo.map(todo => {
      if(todo.id == id){
        todo.done = !todo.done;
      }

      return todo;
    })})

  }



  render(){

    var list = [
      <Content />
    ];
    return(
      <div>
          <Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
          <Frontpage key = {this.state.todo.id} todo = {this.state.todo} checkmark = {this.checkmark.bind(this)} />
          <ul>{list}</ul>
          <Footer />
      </div>

    );
  }
}

export default Body;