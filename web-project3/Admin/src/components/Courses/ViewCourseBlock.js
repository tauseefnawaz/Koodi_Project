import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewCourseBlock = ({ course }) => {
    console.log(course)
    return (
        <Container>
            <Row>
                <Col className="" md={4}>
                    <Card.Img variant="top" src={course.image} className="rounded" />
                </Col>
                <Col className="">
                    <a href={`/detail/${course._id}`}>
                        <Card.Body>
                            <Card.Title ><strong className="text-dark" >{course.name}</strong></Card.Title>
                            <hr></hr>
                            <p className="text-dark">{course.description}</p>
                        </Card.Body>
                    </a>
                </Col>
                <Col md={2}>
                    <button type="button" className="btn btn-dark rounded btn-block my-5" onClick={() => { axios.delete("/course/delete/" + course._id) }}><Link to="/ViewCourse" className="text-white text-decoration-none">Delete</Link></button>
                    <br></br>
                    <a className="btn btn-dark rounded my-5" href={`/updatePage/${course._id}`}> Update </a>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default ViewCourseBlock
