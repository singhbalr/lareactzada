import React from 'react';
import './App.css';
import Content from './Content'
import './test.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Frontpage from './components/Frontpage'
import axios from 'axios'
import InputTask from './components/InputTask'

class Body extends React.Component{
  constructor(){
    super();
    this.state = {
      listTasks : [
        {
          userId : null,
          id : null,
          title : null,
          completed : null

        },

      ],
      testing1 : "testing1"
    }
  }

  testAxios = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
      // (response)? this.setState({ listTasks: response.data }) : this.setState({ listTasks: null })
      this.setState({ listTasks: response.data })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  changeTitle = (title) =>{
    this.setState({title})
  }

  checkmark = (id) => {
    
    this.setState({listTasks: this.state.listTasks.map(listTasks => {
      if(listTasks.id == id){
        listTasks.completed = !listTasks.completed;
      }

      return listTasks;
    })})

  }
  addTasks = (tasks) =>{
    this.setState( state => ({
      ...state,
      addTasks : [
        ...state.addTasks,
        {
          userId : 1,
          id : 201,
          title : tasks,
          completed : false
        }
      ]
    }))
    console.log(this.state.listTasks);
  }

  sampleSetState = (text) => {
    this.setState({
      testing1 : text
    })
  }



  render(){

    var list = [
      <Content />
    ];

    return(
      <div>
          <Header changeTitle = {this.changeTitle} title = {this.state.title} />
          <InputTask addTasks = {this.addTasks} sampleSetState={this.sampleSetState} sampleText={this.state.testing1}/>
          <Frontpage checkmark = {this.checkmark} listTasks = {this.state.listTasks} testAxios = {this.testAxios} />
          <ul>{list}</ul>
          <Footer />
      </div>

    );
  }
}

export default Body;