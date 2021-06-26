import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ViewCourseBlock = ({course}) => {
    console.log(course)
    return (
        <Card className="border border-dark rounded m-2" style={{ width: '20%' }}>
            <Col className="py-1">
                <Card.Img variant="top" src={course.image} className="rounded"/>
            </Col>
            <Col className="py-2">
                <Card.Body>
                    <Card.Title><strong>{course.name}</strong></Card.Title>
                    <hr></hr>
                </Card.Body>
                <button type="button" className="btn btn-dark rounded" onClick={()=>{axios.delete("/course/delete/"+course._id)}}><Link to="/ViewCourse" className="text-white text-decoration-none">Delete</Link></button>
                <a className="btn btn-dark rounded mx-4" href={`/updatePage/${course._id}`}> Update </a>
            </Col>
        </Card>
    )
}

export default ViewCourseBlock
