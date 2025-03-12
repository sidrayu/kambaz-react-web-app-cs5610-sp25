import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import TaskControlButtons from "./TaskControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { ListGroup, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useUserRole } from "../../hooks/useUserRole";


export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const courseAssignments = assignments.filter(
        (assignment: { courseId: string | undefined; }) => assignment.courseId === cid
    );
    const dispatch = useDispatch();
    const { isFaculty } = useUserRole();
    return (
        <Container>
            <div>
                <AssignmentsControls isFaculty={() => isFaculty()} /><br /><br /><br /><br />
                <ListGroup className="rounded-0" id="wd-assignments">
                    <ListGroup.Item className="wd-assignments p-0 mb-5 fs-3 border-gray">
                        <div className="wd-title p-4 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <IoMdArrowDropdown />ASSIGNMENTS<AssignmentControlButtons />
                        </div>

                        <ListGroup className="wd-assignments rounded-0">
                            {courseAssignments.map(assignment => (
                                <ListGroup.Item key={assignment._id} className="wd-task p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <MdOutlineEditNote className="me-2" style={{ color: 'green' }} />
                                            <div>
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
                                                <span style={{ 
                                                    fontSize: '20px', 
                                                    color: '#555', 
                                                    marginTop: '0', 
                                                    lineHeight: '1' 
                                                }}>
                                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                                        {assignment.modules}
                                                    </span> | Not available until {new Date(assignment.availableFromDate).toLocaleDateString()} at {new Date(assignment.availableFromDate).toLocaleTimeString()}  |
                                                    Not available until {new Date(assignment.availableUtilDate).toLocaleDateString()} at {new Date(assignment.availableUtilDate).toLocaleTimeString()} |
                                                    <strong> Due </strong> {new Date(assignment.dueDate).toLocaleDateString()} at {new Date(assignment.dueDate).toLocaleTimeString()} |
                                                    {assignment.points} pts
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center task-control-container">
                                            <TaskControlButtons 
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