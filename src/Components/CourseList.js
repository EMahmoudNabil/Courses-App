import React, { Component } from 'react';
import '../App.css';



class CourseList extends Component{
  render(){
    return(
      <React.Fragment >
        <li>{this.props.detail.name}</li>
    </React.Fragment>

    )

  }

}




export default CourseList;
