import React from 'react';
import '../App.css';

const CourseForm = (props) => {

    return(
        <form onSubmit={props.createCourse}>
            <input type="text" onChange={props.updateCourse} />
            <button type="submit"> Add Course</button>
        </form>

    )
}

export default CourseForm