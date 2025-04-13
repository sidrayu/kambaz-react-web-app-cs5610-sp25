import { Routes, Route, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useUserRole } from "./hooks/useUserRole";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { addCourse, deleteCourse, updateCourse, fetchAllCourses } from "./Courses/reducer";
import { setEnrollments } from "./Enrollment/reducer";
import { useEffect, useState } from "react";
import "./styles.css";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";



export default function Kambaz() {
    const dispatch = useDispatch<any>();
    const { isFaculty } = useUserRole();

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [courses] = useState<any[]>([]);

    const fetchCourses = async () => {
        // await dispatch(courseClient.fetchAllCourses());
        await dispatch(fetchAllCourses());
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);
    

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
                                setEnrollments={setEnrollments}
                                fetchAllCourses={fetchAllCourses}
                                isFaculty={isFaculty}
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
