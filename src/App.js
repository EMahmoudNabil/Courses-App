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
    this.setState({
      current: e.target.value
    })
  }

  //Add Course
  createCourse=(e)=>{
    e.preventDefault();
   let currents = this.state.current;
   let courses = this.state.courses;
   courses.push({name:currents})
   this.setState({
      courses,
      current:''
  })

  }

  //Delete Course
  deleteCourse=(index)=>{
    let courses = this.state.courses;
    courses.splice(index ,1);
    this.setState({
      courses
    })

  }

  //Edit Course
  editCourse=(index, value)=>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name']= value ;
    this.setState({  courses  })}

  render(){
    const {courses} =this.state;
    const courseList = courses.map((course , index )=>{
        return     <CourseList detail={course} key={index} index={index} deleteCourse ={this.deleteCourse}  editCourse={this.editCourse}/>
    })
    return(
      <div className="App">
      <h1 className ="text-center"> Add Courses App </h1>
     
      <CourseForm current={this.state.current} updateCourse={this.updateCourse} createCourse={this.createCourse} />
      <ul >{courseList}</ul>

    </div>

    )

  }

}




export default App;
