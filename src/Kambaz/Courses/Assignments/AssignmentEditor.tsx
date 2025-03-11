import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { assignments } from "../../Database";
import { useState } from "react";

export default function AssignmentEditor() {
    const { cid, assignmentId } = useParams();
    console.log(cid, assignmentId);
    
    const navigate = useNavigate();
    
    // Find existing assignment or create empty template for new assignment
    const existingAssignment = assignmentId 
        ? assignments.find(a => a.courseId === cid && a._id === assignmentId)
        : null;
    
    // Initialize state with existing values or defaults for new assignment 
    const [title, setTitle] = useState(existingAssignment?.title || "");
    const [modules, setModules] = useState(existingAssignment?.modules || "");
    const [description, setDescription] = useState(existingAssignment?.description || "");
    const [points, setPoints] = useState(existingAssignment?.points || 100);
    const [dueDate, setDueDate] = useState(existingAssignment?.dueDate || "");
    const [availableFromDate, setAvailableDate] = useState(existingAssignment?.availableFromDate || "");
    const [availableUtilDate, setAvailableUntil] = useState(existingAssignment?.availableUtilDate || "");

    // If editing and assignment not found
    console.log("existingAssignment", existingAssignment);
    if (assignmentId != "AddNewAssignment" && !existingAssignment) {  
        return <div>Assignment not found</div>;
    }

    // Handle form submission
    const handleSave = () => {
        const newAssignment = {
            _id: existingAssignment?._id || `assignment-${Date.now()}`, // Generate ID for new assignments
            courseId: cid || "",
            title,
            modules,
            availableFromDate,
            availableUtilDate,
            dueDate,
            points,
            description,
        };

        // Update existing or add new assignment
        if (existingAssignment) {
            // Update existing assignment in the array
            const index = assignments.findIndex(a => a._id === existingAssignment._id);
            if (index !== -1) {
                assignments[index] = newAssignment;
            }
        } else {
            // Add new assignment to array
            assignments.push(newAssignment);
        }

        // Navigate back to assignments list
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <Container className="mt-4">
            <Form>
                {/* Assignment Name */}
                <Form.Group className="mb-3" controlId="assignmentName">
                    <Form.Label>Assignment Name</Form.Label>
                    <Col sm={5}>
                        <Form.Control 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                {/* Description */}
                <Form.Group as={Row} className="mb-3" controlId="wd-description">
                    <Col sm={5}>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                            value={points}
                            onChange={(e) => setPoints(Number(e.target.value))} 
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
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="availableFrom">
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control 
                                        type="datetime-local" 
                                        value={availableFromDate}
                                        onChange={(e) => setAvailableDate(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="availableUntil">
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control 
                                        type="datetime-local"
                                        value={availableUtilDate}
                                        onChange={(e) => setAvailableUntil(e.target.value)}
                                    />
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
                        <button 
                            type="button"
                            onClick={handleSave}
                            className="btn btn-danger"
                        >
                            Save
                        </button>
                    </div>
                </Col>
            </Form>
        </Container>
    );
}