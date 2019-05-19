import React from 'react';
import '../App.css';



class Frontpage extends React.Component{

  componentDidMount(){
    this.props.testAxios();
  }
  
  handleCheck = (e) => {
    console.log(e.target);
    const id = e.target.value;

    console.log('fired' + id);

    this.props.checkmark(id);
  }

  checkAesthetics = (completed) => {
    return{
      textDecoration: (completed == 1)? 'line-through' : 'none'
    }
  }
  randColors = () => {
    var colors = ['#EE4540', '#8FB9A8', '#FCBB6D', '#568EA6', '#F26627'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    const taskColors = {
      backgroundColor : random_color
    }
    return taskColors;
  }
  
  render(){
    return(
      <div className = "row">
         {this.props.listTasks.map((value, index) => {
            return (
                <div key = {index} className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
                  <div className = "card-whole" style = {this.randColors()}>
                  <span><input type = "checkbox" value = {value.todo_id} onChange = {this.handleCheck} /><h5 style = {this.checkAesthetics(value.completed)}>{value.todo_title}</h5></span> 
                  </div>
                </div>
            );
        })} 
      </div>
    );

  }
}

export default Frontpage;