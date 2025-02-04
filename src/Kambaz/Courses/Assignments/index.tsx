import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, Col, Row } from "react-bootstrap";
import AssignmentControlButtons from "./AssignmentControlButtons";
import TaskControlButtons from "./TaskControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import AssignmentList from "./AssignmentList";
export default function Assignments() {
    return (
        <div>
            <AssignmentsControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-assignments p-0 mb-5 fs-3 border-gray">
                    <div className="wd-title p-4 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />
                        <IoMdArrowDropdown />ASSIGNMENTS<AssignmentControlButtons />
                    </div>


                    <ListGroup className="wd-assignments rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row>
                                <Col xs={12} md={6} xl={3}>
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdOutlineEditNote />
                                </Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div id="wd-bs-responsive-grids">
                                        <h2>A1</h2>
                                        <Row>
                                            <Col xs={12} md={6} xl={3}
                                                className="bg-warning">
                                                <h3>Column A</h3>
                                            </Col>
                                            <Col xs={12} md={6} xl={3}
                                                className="bg-primary text-white">
                                                <h3>Column B</h3>
                                            </Col>
                                            <Col xs={12} md={6} xl={3}
                                                className="bg-danger text-white">
                                                <h3>Column C</h3>
                                            </Col>
                                            <Col xs={12} md={6} xl={3}
                                                className="bg-success text-white">
                                                <h3>Column D</h3>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} xl={3}>
                                    <TaskControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-task p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><MdOutlineEditNote />A2 - CSS + BOOTSTRAP<TaskControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-task p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />A3 - JAVASCRIPT + REACT<TaskControlButtons /></ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>

        </div>

    );
}
