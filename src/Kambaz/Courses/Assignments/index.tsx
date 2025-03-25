import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import TaskControlButtons from "./TaskControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { ListGroup, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useUserRole } from "../../hooks/useUserRole";
import * as assignmentsClient from "../client";
import { useEffect, useState } from "react";
export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const courseAssignments = assignments.filter(
        (assignment: { courseId: string | undefined; }) => assignment.courseId === cid
    );
    
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    const { isFaculty } = useUserRole();
    return (
        <Container>
            <div>
                <AssignmentsControls 
                    isFaculty={() => isFaculty()} 
                /><br /><br /><br /><br />
                <ListGroup className="rounded-0" id="wd-assignments">
                    <ListGroup.Item className="wd-assignments p-0 mb-5 fs-3 border-gray">
                        <div className="wd-title p-4 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <IoMdArrowDropdown />ASSIGNMENTS<AssignmentControlButtons />
                        </div>

                        <ListGroup className="wd-assignments rounded-0">
                            {courseAssignments.map((assignment: any) => (
                                <ListGroup.Item key={assignment._id} className="wd-task p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <div>
                                                {isFaculty() && (
                                                    <Link
                                                        id="wd-task-link"
                                                        to={`/Kambaz/Courses/${cid}/Assignments/Editor/${assignment._id}`}
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <strong style={{
                                                            fontSize: '24px',
                                                            color: "black",
                                                            marginBottom: '0',
                                                            display: 'block',
                                                            lineHeight: '1'
                                                        }}>
                                                            {assignment.title}
                                                        </strong>
                                                    </Link>
                                                )}
                                                {!isFaculty() && (
                                                    <strong
                                                        style={{
                                                            fontSize: '24px',
                                                            color: "black",
                                                            marginBottom: '0',
                                                            display: 'block',
                                                            lineHeight: '1'
                                                        }}
                                                    >
                                                        {assignment.title}
                                                    </strong>
                                                )}

                                                <span style={{
                                                    fontSize: '20px',
                                                    color: '#555',
                                                    marginTop: '0',
                                                    lineHeight: '1'
                                                }}>
                                                    Available from {new Date(assignment.availableFromDate).toLocaleDateString()} at {new Date(assignment.availableFromDate).toLocaleTimeString()}  |
                                                    Available until {new Date(assignment.availableUtilDate).toLocaleDateString()} at {new Date(assignment.availableUtilDate).toLocaleTimeString()} |
                                                    <strong> Due </strong> {new Date(assignment.dueDate).toLocaleDateString()} at {new Date(assignment.dueDate).toLocaleTimeString()} |
                                                    {assignment.points} pts
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center task-control-container">
                                            <TaskControlButtons
                                                courseId={cid || ""}
                                                assignmentId={assignment._id}
                                                deleteAssignment={(assignmentId: any) => dispatch(deleteAssignment(assignmentId))}
                                                isFaculty={() => isFaculty()}
                                            />
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    );
}