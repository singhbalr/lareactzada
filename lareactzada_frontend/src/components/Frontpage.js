import React from 'react';
import Header from './Header'
import Footer from './Footer'


class Frontpage extends React.Component{
  
  handleCheck(e){
    const id = e.target.value;

    this.props.checkmark(id);
  }
  checkAesthetics(done){

    return{
      textDecoration: done? 'line-through' : 'none'
    }
  }
  
  render(){

    return(
      <div>
        {this.props.todo.map((value, index) => {
          return (
            <div>
              <h1 key = {this.props.todo.id} style={this.checkAesthetics(value.done)}>{value.title}</h1><input key = {this.props.todo.id} type = "checkbox" value = {value.id} onClick = {this.handleCheck.bind(this)} />  
            </div>
          );
        })}
      </div>
    );

  }
}

export default Frontpage;