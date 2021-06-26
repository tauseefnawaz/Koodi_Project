import axios from 'axios'
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import ViewCourseBlock from './ViewCourseBlock'
class ViewCourses extends React.Component {
    state = {
        name:'',
        description:'',
        teacherName:'',
        teacherIntroduction:'', 
        teacherQualification:'',
        image:'',
        courses : []
    }
    componentDidMount = () =>{
        this.getCourses();
    }
    getCourses = ()=>{
        axios.get('/course/get').then((res)=>{
            const courses = res.data;
            this.setState({courses:courses})
            console.log("Course Recieve");
        }).catch(()=>{
            console.log("error in recieving courses");
        })
    }
    render(){
    return (
        <>
            <h1 className="text-center">Courses</h1>
            <div>
                 { <Row>
                     {this.state.courses.map((course)=>(
                            <ViewCourseBlock course = {course}/>
                     ))}
                 </Row> }
          </div>
        </>
        )
    }
}

export default ViewCourses