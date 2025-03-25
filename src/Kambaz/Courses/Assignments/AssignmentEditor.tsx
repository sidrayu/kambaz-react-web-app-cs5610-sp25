import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function AssignmentEditor({
    isFaculty, addAssignment, updateAssignment }: {
        isFaculty: () => boolean;
        addAssignment: (assignment: any) => void;
        updateAssignment: (assignment: any) => void;
    }) {
    const displayDate = (date: string) => {
        return date ? new Date(date).toISOString().slice(0, 16) : "";
    };

    const { cid, assignmentId } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    // Find existing assignment or create empty template for new assignment
    const existingAssignment = assignmentId
        ? assignments.find((a: any) => a.courseId === cid && a._id === assignmentId)
        : null;

    // Initialize state with existing values or defaults for new assignment 
    const [title, setTitle] = useState(existingAssignment?.title || "");
    // const [modules, setModules] = useState(existingAssignment?.modules || "Module 1");
    const [description, setDescription] = useState(existingAssignment?.description || "");
    const [points, setPoints] = useState(existingAssignment?.points || 0);
    const [dueDate, setDueDate] = useState(existingAssignment?.dueDate || "2025/01/01");
    const [availableFromDate, setAvailableDate] = useState(existingAssignment?.availableFromDate || "2025/01/01");
    const [availableUtilDate, setAvailableUntil] = useState(existingAssignment?.availableUtilDate || "2025/01/01");

    // If editing and assignment not found
    if (assignmentId != "AddNewAssignment" && !existingAssignment) {
        return <div>Assignment not found</div>;
    }

    const handlAddAssignment = async (assignment: any) => {
        await dispatch(
            addAssignment({
                courseId: assignment.courseId,
                title: assignment.title,
                modules: assignment.modules,
                availableFromDate: assignment.availableFromDate,
                availableUtilDate: assignment.availableUtilDate,
                dueDate: assignment.dueDate,
                points: assignment.points,
                description: assignment.description,
            })
        );
    };

    const handlUpdateAssignment = async (assignment: any) => {
       await dispatch(
            updateAssignment({
                _id: assignment._id,
                courseId: assignment.courseId,
                title: assignment.title,
                modules: assignment.modules,
                availableFromDate: assignment.availableFromDate,
                availableUtilDate: assignment.availableUtilDate,
                dueDate: assignment.dueDate,
                points: assignment.points,
                description: assignment.description,
            })
        );
    };

    // Handle form submission
    const handleSave = () => {
        const updatedAssignment = {
            _id: existingAssignment?._id || '',
            courseId: cid || "",
            title,
            // modules,
            availableFromDate,
            availableUtilDate,
            dueDate,
            points,
            description,
        };

        // Update existing or add new assignment
        if (existingAssignment) {
            handlUpdateAssignment(updatedAssignment);
        }
        else {
            handlAddAssignment(updatedAssignment);
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
                                value={displayDate(dueDate)}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="availableFrom">
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        value={displayDate(availableFromDate)}
                                        onChange={(e) => setAvailableDate(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="availableUntil">
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        value={displayDate(availableUtilDate)}
                                        onChange={(e) => setAvailableUntil(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card>

                    {/* Action Buttons */}
                    {isFaculty() && (
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
                    )}
                </Col>
            </Form>
        </Container>
    );
}