import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from 'axios'
const ShowCourses = ({course}) => {

    return (
        <>
        <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
            <a href={`/detail/${course._id}`}>
            <Card.Img variant="top" src={course.image} className="rounded"/>
            </a>
            <a href={`/detail/${course._id}`}>
            <Card.Body>
                <Card.Title><strong>{course.name}</strong></Card.Title>
                <hr></hr>
            </Card.Body>
            </a>
        </Card>
    </>
    )

}
export default ShowCourses

