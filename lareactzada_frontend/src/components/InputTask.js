import React from 'react';

class InputTask extends React.Component{
  constructor(){
    super();
    this.state = {
      taskName : null
    }
  }

  addTasks = () =>{
    this.props.addTasks(this.state.taskName);
  }

  handleChange(e){
    const name = this.state.taskName;
    e.persist();
    this.setState({taskName : e.target.value})
    console.log(name);
  }


  render(){
    return(
      <div>
        <h1>{this.props.sampleText}</h1><input onChange = { e => this.handleChange(e)} /><button onClick = {this.addTasks}>Add tasks</button>
      </div>
    );
  }
}

export default InputTask;