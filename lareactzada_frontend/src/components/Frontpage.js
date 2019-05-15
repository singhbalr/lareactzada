import React from 'react';
import '../App.css';



class Frontpage extends React.Component{

  componentDidMount(){
    this.props.testAxios();
  }
  
  handleCheck = (e) => {
    const id = e.target.value;

    this.props.checkmark(id);
  }

  checkAesthetics = (completed) => {
    return{
      textDecoration: completed? 'line-through' : 'none'
    }
  }
  randColors = () => {
    var colors = ['#ff0000', '#00ff00', '#0000ff'];
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
                <div key = {value.id} className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
                  <div className = "card-whole" style = {this.randColors()}>
                    <h1 style = {this.checkAesthetics(value.completed)}>{value.title}</h1><input type = "checkbox" value = {value.id} onChange = {this.handleCheck} checked = {value.completed} />  
                  </div>
                </div>
            );
        })} 
      </div>
    );

  }
}

export default Frontpage;