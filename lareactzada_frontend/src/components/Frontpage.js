import React from 'react';



class Frontpage extends React.Component{

  componentDidMount(){
    this.props.testAxios();
  }
  
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
    console.log(this.props.listTasks);
    return(
      <div>
        {/* {this.props.todo.map((value, index) => {
          return (
            <div>
              <h1 key = {this.props.todo.id} style={this.checkAesthetics(value.done)}>{value.title}</h1><input key = {this.props.todo.id} type = "checkbox" value = {value.id} onClick = {this.handleCheck.bind(this)} />  
            </div>
          );
        })} */}

         {this.props.listTasks.map((value, index) => {
            return (
              <div key = {value.id}>
                <h1>{value.title}</h1><input type = "checkbox" value = {value.id} />  
              </div>
            );
        })} 
      </div>
    );

  }
}

export default Frontpage;