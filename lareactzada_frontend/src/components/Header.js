import React from 'react';
import '../App.css';
import '../test.js'
import Title from './Header/Title'


export default class Header extends React.Component{
    handleChange(e){
      const title = e.target.value;
      this.props.changeTitle(title);
    }
  
  render(){


    return(
      <div>
        <header><Title title = {(this.props.title)} /></header>
        <input value = {this.props.title} onChange = {this.handleChange.bind(this)} />
      </div>

    );
  }
}
