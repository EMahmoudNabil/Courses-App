import React, { Component } from 'react';
import '../App.css';



class CourseList extends Component{

    state={
        isEdit:false
    }
 // render Course items
renderCourse=()=>{
    return(
        <li>
        <span>{this.props.detail.name}</span>
        <button onClick={()=>{this.toggleState()}} >Update</button>
        <button onClick={()=>{this.props.deleteCourse(this.props.index)}} >Delete</button>
      </li>
    )
}

//toggleState
toggleState=()=>{
let {isEdit} = this.state;
this.setState({
    isEdit : !isEdit
})
}

//update Course Item
updateCourseItem=(e)=>{
e.preventDefault();
this.props.editCourse(this.props.index , this.input.value);
this.toggleState()

}
// render Update Course
renderUpdateForm=()=>{
    return(
        <form onSubmit={this.updateCourseItem}>
           <input  ref={(v)=>{this.input = v}} defaultValue={this.props.detail.name}  type="text"/> 
           <button>Update</button>
        </form>
    )
}
  render(){
      let {isEdit} =this.state ;
    return(
      <React.Fragment >
      { isEdit ? this.renderUpdateForm() :  this.renderCourse()}
    </React.Fragment>

    )

  }

}




export default CourseList;
