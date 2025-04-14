import { Routes, Route, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useUserRole } from "./hooks/useUserRole";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { addCourse, deleteCourse, updateCourse, setCourses } from "./Courses/reducer";
import { useEffect, useState } from "react";
import "./styles.css";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";


export default function Kambaz() {
    const dispatch = useDispatch<any>();
    const { isFaculty } = useUserRole();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses } = useSelector((state: any) => state.courseReducer);

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });
    const [enrolling, setEnrolling] = useState<boolean>(false);
    const findCoursesForUser = async () => {
        try {
            if (!currentUser || !currentUser._id) {
                console.warn("No currentUser available");
                return;
            }
            console.log("Kambaz.index.currentUser", currentUser);
            const courses = await userClient.findCoursesForUser(currentUser._id);
            console.log("Kambaz.index.findCoursesForUser", courses);
            dispatch(setCourses(courses))
        } catch (error) {
            console.error(error);
        }
    };
    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }

        dispatch(setCourses(
            courses.map((course: any) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        ));
    };

    const fetchCourses = async () => {
        try {
            if (!currentUser || !currentUser._id) {
                console.warn("No currentUser available");
                dispatch(setCourses([]));
                return;
            }
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            dispatch(setCourses(courses))
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log("Kambaz.index.useEffect.enrolling: ", enrolling);
        console.log("Kambaz.index.useEffect.currentUser: ", currentUser);
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);

    const handleAddCourse = async () => {
        if (!isFaculty()) return;
        await dispatch(addCourse(course));
        await fetchCourses();
        setCourse({
            _id: "0",
            name: "New Course",
            number: "New Number",
            startDate: "2023-09-10",
            endDate: "2023-12-15",
            image: "/images/reactjs.jpg",
            description: "New Description"
        });
    };

    const hancleDeleteCourse = async (courseId: string) => {
        if (!isFaculty()) return;
        await dispatch(deleteCourse(courseId));
        await fetchCourses();
    };

    const handleUpdateCourse = async () => {
        if (!isFaculty()) return;
        await dispatch(updateCourse(course));
        await fetchCourses();
    };

    return (
        <Session>

            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={handleAddCourse}
                                    deleteCourse={hancleDeleteCourse}
                                    updateCourse={handleUpdateCourse}
                                    isFaculty={isFaculty}
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment}
                                />
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={
                            <Courses
                                courses={courses}
                                isFaculty={isFaculty}
                            />
                        } />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}
