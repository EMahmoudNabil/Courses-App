import React, { Component } from 'react';
import './App.css';
import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList'


class App extends Component{

  state={
    courses : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
    ],
    current:''
  }

  render(){
    return(
      <div className="App">
      <h1 className ="text-center"> Add Courses </h1>
      <CourseForm />
      <CourseList />

    </div>

    )

  }

}




export default App;
