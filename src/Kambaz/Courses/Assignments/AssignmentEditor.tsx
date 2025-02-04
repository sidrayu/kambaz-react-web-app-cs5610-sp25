import { Container, Form, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <Container className="mt-4">
            <Form>
                {/* Assignment Name */}
                <Form.Group className="mb-3" controlId="assignmentName">
                    <Form.Label><strong>Assignment Name</strong></Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" placeholder="A1" /></Col>
                </Form.Group>

                {/* Description */}

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="wd-description">
                        <Col sm={5}>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
- The Kanbas application should include a link to navigate back to the landing page.`}
                                className="shadow-sm"
                            />
                        </Col>
                    </Form.Group>
                </Form>


                {/* Points */}
                <Form.Group as={Row} className="mb-3" controlId="points">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="number" defaultValue={100} />
                    </Col>
                </Form.Group>

                {/* Assignment Group */}
                <Form.Group as={Row} className="mb-3" controlId="assignmentGroup">
                    <Form.Label column sm={2}>Assignment Group</Form.Label>
                    <Col sm={3}>
                        <Form.Select>
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>PROJECTS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Display Grade As */}
                <Form.Group as={Row} className="mb-3" controlId="displayGrade">
                    <Form.Label column sm={2}>Display Grade as</Form.Label>
                    <Col sm={3}>
                        <Form.Select>
                            <option>Percentage</option>
                            <option>Points</option>
                            <option>Complete/Incomplete</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Submission Type */}
                <Form.Group className="mb-3" controlId="submissionType">
                    <Col sm={4}>
                        <Form.Label>Submission Type</Form.Label>
                        <Form.Select>
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </Form.Select>
                    </Col>

                    {/* Online Entry Options */}
                    <div className="mt-2">
                        <Form.Label><strong>Online Entry Options</strong></Form.Label>
                        <Form.Check type="checkbox" label="Text Entry" />
                        <Form.Check type="checkbox" label="Website URL" defaultChecked />
                        <Form.Check type="checkbox" label="Media Recordings" />
                        <Form.Check type="checkbox" label="Student Annotation" />
                        <Form.Check type="checkbox" label="File Uploads" />
                    </div>
                </Form.Group>

                {/* Assign Section */}
                <Col sm={4}>
                    <Card className="p-3 mb-3">
                        <Form.Group className="mb-3" controlId="assignTo">
                            <Form.Label><strong>Assign to</strong></Form.Label>
                            <Form.Control type="text" value="Everyone" readOnly />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dueDate">
                            <Form.Label>Due</Form.Label>
                            <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="availableFrom">
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
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
                        <Button variant="secondary">Cancel</Button>
                        <Button variant="danger">Save</Button>
                    </div>
                </Col>
            </Form>
        </Container>
    );
}
