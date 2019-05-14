import React from 'react';

class InputTask extends React.Component{
  constructor(){
    super();
    this.state = {
      addTasks :[ 
        {
          userId : null,
          id : null,
          title : null,
          completed : null
        }  
      ]
    }
  }

  handleChange(e){
    e.persist();
    this.props.sampleSetState(e.target.value);
  }


  render(){
    return(
      <div>
        <h1>{this.props.sampleText}</h1><input onChange = { e => this.handleChange(e)} /><button>Add tasks</button>
      </div>
    );
  }
}

export default InputTask;