import React from 'react';



class Frontpage extends React.Component{

  componentDidMount(){
    this.props.testAxios();
  }
  
  handleCheck = (e) => {
    console.log(e);
    const id = e.target.value;

    this.props.checkmark(id);
  }

  checkAesthetics = (completed) => {
    return{
      textDecoration: completed? 'line-through' : 'none'
    }
  }
  
  render(){
    return(
      <div>
         {this.props.listTasks.map((value, index) => {
            return (
              <div key = {value.id}>
                <h1 style = {this.checkAesthetics(value.completed)}>{value.title}</h1><input type = "checkbox" value = {value.id} onChange = {this.handleCheck} checked = {value.completed} />  
              </div>
            );
        })} 
      </div>
    );

  }
}

export default Frontpage;