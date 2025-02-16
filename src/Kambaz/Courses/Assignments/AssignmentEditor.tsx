import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { assignments, courses } from "../../Database";

export default function AssignmentEditor() {
    const { cid, assignmentId } = useParams();
    const assignment = assignments.find(
        a => a.courseId === cid && a._id === assignmentId
    );
    const course =courses.find(c => c._id === cid)
    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <Container className="mt-4">
            <Form>
                {/* Assignment Name */}
                <Form.Group className="mb-3" controlId="assignmentName">
                    <Form.Label>Assignment Name</Form.Label>
                    <Col sm={5}>
                    
                        <Form.Control 
                            type="text" 
                            defaultValue={assignment.title}
                        />
                    </Col>
                </Form.Group>

                {/* Description */}
                <Form.Group as={Row} className="mb-3" controlId="wd-description">
                    <Col sm={5}>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            defaultValue={course?.description}
                            className="shadow-sm"
                        />
                    </Col>
                </Form.Group>

                {/* Points */}
                <Form.Group as={Row} className="mb-3" controlId="points">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={3}>
                        <Form.Control 
                            type="number" 
                            defaultValue={assignment.points} 
                        />
                    </Col>
                </Form.Group>

                {/* ...existing code for other form groups... */}

                {/* Assign Section */}
                <Col sm={4}>
                    <Card className="p-3 mb-3">
                        <Form.Group className="mb-3" controlId="assignTo">
                            <Form.Label><strong>Assign to</strong></Form.Label>
                            <Form.Control type="text" value="Everyone" readOnly />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dueDate">
                            <Form.Label>Due</Form.Label>
                            <Form.Control 
                                type="datetime-local" 
                                defaultValue={assignment.dueDate}
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="availableFrom">
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control 
                                        type="datetime-local" 
                                        defaultValue={assignment.availableDate}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="availableUntil">
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control type="datetime-local" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-2">
                        <Link 
                            to={`/Kambaz/Courses/${cid}/Assignments`}
                            className="btn btn-secondary"
                        >
                            Cancel
                        </Link>
                        <Link 
                            to={`/Kambaz/Courses/${cid}/Assignments`}
                            className="btn btn-danger"
                        >
                            Save
                        </Link>
                    </div>
                </Col>
            </Form>
        </Container>
    );
}