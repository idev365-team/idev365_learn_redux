import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  handleClick=()=>{
    console.log("点击了按钮")
    const { dispatch } = this.props
    dispatch({
      type:"add"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.user} : {this.props.couter}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  console.log("mapStateToProps-->state",state);
  return {
    user:state.user,
    couter:state.couter,
  }
}

export default connect(mapStateToProps)(App);
