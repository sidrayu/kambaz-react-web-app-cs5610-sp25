import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import TaskControlButtons from "./TaskControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Assignments() {
    return (
        <Container>
            <div>
                <AssignmentsControls /><br /><br /><br /><br />
                <ListGroup className="rounded-0" id="wd-assignments">
                    <ListGroup.Item className="wd-assignments p-0 mb-5 fs-3 border-gray">
                        <div className="wd-title p-4 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />
                            <IoMdArrowDropdown />ASSIGNMENTS<AssignmentControlButtons />
                        </div>


                        <ListGroup className="wd-assignments rounded-0">
                            <ListGroup.Item className="wd-task p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdOutlineEditNote className="me-2" style={{ color: 'green' }} />
                                        <div>
                                            <Link id="wd-task-link"
                                                to="/Kambaz/Courses/1234/Assignments/Editor"
                                                style={{ textDecoration: 'none' }}>
                                                <strong style={{ fontSize: '24px', color: "black", marginBottom: '0', display: 'block', lineHeight: '1' }}>
                                                    A1 - ENV + HTML
                                                </strong></Link>
                                            <span style={{ fontSize: '20px', color: '#555', marginTop: '0', lineHeight: '1' }}>
                                                <span style={{ color: 'red', fontWeight: 'bold' }}>Multiple Modules</span> |
                                                Not available until May 6 at 12:00am |
                                                <strong> Due </strong> May 13 at 11:59pm |
                                                100 pts
                                            </span>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center task-control-container">
                                        <TaskControlButtons />
                                    </div>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item className="wd-task p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdOutlineEditNote className="me-2" style={{ color: 'green' }} />
                                        <div>
                                        <Link id="wd-task-link"
                                                to="/Kambaz/Courses/1234/Assignments/Editor"
                                                style={{ textDecoration: 'none' }}><strong style={{ fontSize: '24px', color: "black", marginBottom: '0', display: 'block', lineHeight: '1' }}>
                                                A2 - CSS + BOOTSTRAP
                                            </strong></Link>
                                            <span style={{ fontSize: '20px', color: '#555', marginTop: '0', lineHeight: '1' }}>
                                                <span style={{ color: 'red', fontWeight: 'bold' }}>Multiple Modules</span> |
                                                Not available until May 13 at 12:00am |
                                                <strong> Due </strong> May 13 at 11:59pm |
                                                100 pts
                                            </span>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center task-control-container">
                                        <TaskControlButtons />
                                    </div>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item className="wd-task p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdOutlineEditNote className="me-2" style={{ color: 'green' }} />
                                        <div>
                                        <Link id="wd-task-link"
                                                to="/Kambaz/Courses/1234/Assignments/Editor"
                                                style={{ textDecoration: 'none' }}>
                                            <strong style={{ fontSize: '24px', color: "black", marginBottom: '0', display: 'block', lineHeight: '1' }}>
                                                A3 - JAVASCRIPT + REACT
                                            </strong></Link>
                                            <span style={{ fontSize: '20px', color: '#555', marginTop: '0', lineHeight: '1' }}>
                                                <span style={{ color: 'red', fontWeight: 'bold' }}>Multiple Modules</span> |
                                                Not available until May 20 at 12:00am |
                                                <strong> Due </strong> May 20 at 11:59pm |
                                                100 pts
                                            </span>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center task-control-container">
                                        <TaskControlButtons />
                                    </div>
                                </div>
                            </ListGroup.Item>

                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>

            </div>
        </Container>

    );
}
