import React from 'react'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button, Container} from 'react-bootstrap'

class courseScreen extends React.Component {
    match = null;
    state = {
        name: '',
        description: '',
        teacherName: '',
        teacherIntroduction: '',
        teacherQualification: '',
        image: ''
    }
    constructor(props) {
        super(props)
        this.match = props.match
    }
    componentDidMount = () => {
        this.getCourses();
    }
    getCourses = () => {
        axios.get(`/course/get/${this.match.params.id}`).then((res) => {
            const course = res.data;
            this.setState({
                name: course.name,
                description: course.description,
                teacherName: course.teacherName,
                teacherIntroduction: course.teacherIntroduction,
                teacherQualification: course.teacherQualification,
                image: course.image
            })
            console.log("Course Recieve");
        }).catch(() => {
            console.log("error in recieving courses");
        })
    }
    displayCourses = () => {
        <p>{this.course.name}</p>
    }
    render() {
        return (
            <Container>
            <Row>
                <Col md={6}>
                    <img src={this.state.image} alt={this.state.name}/>
                </Col>

                <br></br>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>$49.99</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className='btn-block'
                                    type='button'
                                >
                                    Buy Now
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <hr></hr>
                    <Row>
                        <Col>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>Teacher Discription:</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>{this.state.teacherName}</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Introduction: {this.state.teacherIntroduction}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
            <Row>
            <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{this.state.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {this.state.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default courseScreen