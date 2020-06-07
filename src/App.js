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
  // Update Course
  updateCourse=(e)=>{
    console.log(e.target.value)
  }

  //Add Course
  createCourse=(e)=>{
    e.preventDefault();
    console.log("add course")

  }


  render(){
    const {courses} =this.state;
    const courseList = courses.map((course , index )=>{
        return     <CourseList detail={course} key={index} />
    })
    return(
      <div className="App">
      <h1 className ="text-center"> Add Courses </h1>
     
      <CourseForm  updateCourse={this.updateCourse} createCourse={this.createCourse} />
      <ul >{courseList}</ul>

    </div>

    )

  }

}




export default App;
