import axios from 'axios'
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import ShowCourses from './ShowCourses'
class Courses extends React.Component {
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
    displayCourses = (courses) => {
        console.log(courses.length)
        if(!courses.length==0) return null
    }
    render(){
    return (
            <div className='container1'>
            <div className='row'>
            <h1>Explore Courses</h1>
            </div>
            
            <div className="card-deck px-4" >
            <Row>
                {this.state.courses.map((course)=>(     
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <ShowCourses course = {course}/> 
                    </Col>
                ))}
            </Row>

            </div>
        </div>
        )
    }
}



export default Courses