import React from 'react';
import Header from './Header'
import Footer from './Footer'


class Frontpage extends React.Component{
  
  handleCheck(e){
    const title = e.target.value;

    this.props.checkmark(title);
  }
  checkAesthetics(done){
    if(done){
      return{
        textDecoration : 'line-through'
      }
      
    }else{
      return{
        textDecoration: 'none'
      }
    }
  }
  
  render(){

    return(
      <div>
        {this.props.todo.map((value, index) => {
          return (
            <div>
              <h1 style={this.checkAesthetics(value.done)}>{value.title}</h1><input type = "checkbox" value = {value.done} onClick = {this.handleCheck.bind(this)} />  
            </div>
          );
        })}
      </div>
    );

  }
}

export default Frontpage;