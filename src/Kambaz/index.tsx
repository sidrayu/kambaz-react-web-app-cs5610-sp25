import { Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import courses from "./Database/courses.json";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function Kambaz() {
    const [coursesList, setCourses] = useState<any[]>(courses);
    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });

    const addNewCourse = () => {
        const newCourse = { ...course, _id: uuidv4() };
        setCourses([...coursesList, newCourse]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(coursesList.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            coursesList.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                        <Dashboard
                            courses={coursesList}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                        />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={<Courses courses={coursesList} />} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
    );
}
