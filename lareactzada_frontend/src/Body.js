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
  constructor(props){
    super(props);
    this.state = {
      listTasks : [
        {
          todo_id : null,
          user_id : null,
          todo_type_id : null,
          todo_title : null,
          todo_content : null,
          completed : null,
          created_at : null,
          updated_at : null,

        },
      ],
    }
  }




  testAxios = () => {
    axios.get('/web/get-todo/1')
    .then(response => {
      console.log(response);
      // (response)? this.setState({ listTasks: response.data }) : this.setState({ listTasks: null })
      this.setState({ listTasks: response.data })
      console.log(this.state.listTasks);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  changeTitle = (title) =>{
    this.setState({title})
  }

  checkmark = (id) => {
    console.log(id);
    this.setState({listTasks: this.state.listTasks.map(listTasks => {
      if(listTasks.todo_id == id){
        listTasks.completed = !listTasks.completed;
        console.log(listTasks.completed);
      }

      return listTasks;
    })})

  }
  addTasks = (tasks) =>{   

    axios.post('/web/add-todo', {
      user_id: 1,
      todo_type_id: 1,
      todo_title : tasks,
      todo_content : 'sample',
      completed : 0
    })
    .then(function (response) {
      console.log(response);


      // const taskstate =  [...this.state.listTasks];

      // let value = {
      //   todo_id : 2,
      //   user_id : null,
      //   todo_type_id : null,
      //   todo_title : tasks,
      //   todo_content : null,
      //   completed : 0,
      //   created_at : null,
      //   updated_at : null,
      // }

      // this.setState({
      //   listTasks : taskstate.concat(value)
      // });

    })
    .catch(function (error) {
      console.log(error);
    });

  }

  sampleSetState = (text) => {
    this.setState({
      testing1 : text
    })
  }



  render(){


    return(
      <div className = "bg-image">
        <div className = "all-container">
          <Header changeTitle = {this.changeTitle} title = {this.state.title} />
          <InputTask addTasks = {this.addTasks} />
          <Frontpage checkmark = {this.checkmark} listTasks = {this.state.listTasks} testAxios = {this.testAxios} />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Body;