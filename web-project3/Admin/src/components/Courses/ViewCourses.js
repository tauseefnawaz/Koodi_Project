import axios from 'axios'
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import ViewCourseBlock from './ViewCourseBlock'
class ViewCourses extends React.Component {
    state = {
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
            <h1 className="text-center m-4">Courses</h1>
            <div className="container justify-content-center w-50 my-4">
                <div className="row">
                    <div className="col">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </div>
                </div>
            </div>
            <div className="container">
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