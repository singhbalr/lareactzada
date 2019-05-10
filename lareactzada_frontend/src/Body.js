import React from 'react';
import './App.css';
import Content from './Content'
import './test.js'
import Header from './components/Header'
import Footer from './components/Footer'

class Body extends React.Component{
  constructor(){
    super();
    this.state = {
      "'title'": "Welcome",
    };
  }
  
  changeTitle(title){
    this.setState({title})
  }



  render(){

    var list = [
      <Content />,
      <Content />,
      <Content />,
      <Content />,
      <Content />,
      <Content />,
    ];
    return(
      <div>
          <Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
          <ul>{list}</ul>
          <Footer />
      </div>

    );
  }
}

export default Body;