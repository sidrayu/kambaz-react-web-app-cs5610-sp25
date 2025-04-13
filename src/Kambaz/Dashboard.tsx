import { Link } from "react-router-dom";
import { Button, Card, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as enrollmentClient from "./Enrollment/client";


export default function Dashboard(
    { course, setCourse, addNewCourse,
        deleteCourse, updateCourse, setEnrollments, fetchAllCourses, isFaculty }: {
            course: any;
            setCourse: (course: any) => void;
            addNewCourse: () => void;
            deleteCourse: (courseId: string) => void;
            updateCourse: () => void; 
            setEnrollments: (enrollments: any) => void;
            fetchAllCourses: () => void;
            isFaculty: () => boolean;
        }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch<any>();

    const fetchCourses = async () => {
        await dispatch(fetchAllCourses());
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    const fetchEnrollments = async () => {
        const enrollments = await enrollmentClient.findEnrollmentsForUser(currentUser._id as string);
        await dispatch(setEnrollments(enrollments));
    };
    useEffect(() => {
        fetchEnrollments();
    }, [currentUser._id]);

    const courses = useSelector((state: any) => state.courseReducer.courses);
    const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);

    const handleEnrollCourse = async (userId: string, courseId: string) => {
        await enrollmentClient.enrollCourse(userId,courseId);
        fetchEnrollments();
    }
    const handleUnenrollCourse = async (userId: string, courseId: string) => {      
        await enrollmentClient.unenrollCourse(userId,courseId);
        fetchEnrollments();
    };

    // const displayedCourses = courses;
    const displayedCourses = showAll || isFaculty()
        ? courses
        : courses.filter((c: any) =>
            enrollments.some((e: any) => e.user === currentUser._id && e.course === c._id)
        );

    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {isFaculty() && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}>Add</button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <FormControl
                        value={course.name || ""}
                        placeholder="Course Name"
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <FormControl
                        value={course.number || ""}
                        placeholder="Course Number"
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })}
                    />
                    <FormControl
                        type="date"
                        value={course.startDate || ""}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                    />
                    <FormControl
                        type="date"
                        value={course.endDate || ""}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                    />
                    <FormControl
                        value={course.image || ""}
                        placeholder="Course Image URL"
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, image: e.target.value })}
                    />
                    <FormControl
                        as="textarea"
                        value={course.description || ""}
                        placeholder="Course Description"
                        rows={3}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            {!isFaculty() && (
                <button className="btn btn-primary float-end" onClick={toggleShowAll}>
                    Enrollments
                </button>
            )}
            <div className="row" id="wd-dashboard-courses">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course: any) => (
                        <div key={course._id} className="col" style={{ width: "300px" }}>
                            <Card>
                                <Card.Img src={course.image || "/images/reactjs.jpg"}
                                    variant="top"
                                    width="100%"
                                    height={160} />
                                <Card.Body>
                                    <Card.Title className="text-nowrap overflow-hidden">
                                        {course.name}
                                    </Card.Title>
                                    <Card.Text className="overflow-hidden"
                                        style={{ height: "100px" }}>
                                        {course.description}
                                    </Card.Text>
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                        className="btn btn-primary me-2">
                                        Go
                                    </Link>
                                    {isFaculty() && (
                                        <>
                                            <Button
                                                variant="warning"
                                                id="wd-edit-course-click"
                                                className="me-2"
                                                onClick={() => setCourse(course)}>
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                id="wd-delete-course-click"
                                                // onClick={() => deleteCourse(course._id)}
                                                onClick={async () => {
                                                    await deleteCourse(course._id);
                                                    fetchCourses();
                                                  }}
                                                >
                                                Delete
                                            </Button>
                                        </>
                                    )}
                                    {!isFaculty() && (
                                        enrollments.some((e: any) => e.user === currentUser._id && e.course === course._id)
                                            ? <Button variant="danger"
                                                onClick={() => handleUnenrollCourse( course._id, currentUser._id)}>
                                                Unenroll
                                            </Button>
                                            : <Button variant="success"
                                                onClick={() => handleEnrollCourse(course._id, currentUser._id)}>
                                                Enroll
                                            </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}