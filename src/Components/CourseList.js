import React, { Component } from 'react';
import '../App.css';



class CourseList extends Component{
 // render Course items
renderCourse=()=>{
    return(
        <li>
        <span>{this.props.detail.name}</span>
         
        <button onClick={()=>{this.props.deleteCourse(this.props.index)}} >Delete</button>
      </li>
    )
}

  render(){
    return(
      <React.Fragment >
      {this.renderCourse()}
    </React.Fragment>

    )

  }

}




export default CourseList;
