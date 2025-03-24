import { Routes, Route, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useUserRole } from "./hooks/useUserRole";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";
import "./styles.css";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
export default function Kambaz() {
    const coursesList = useSelector((state: any) => state.coursesReducer.courses);
    const dispatch = useDispatch();
    const { isFaculty } = useUserRole();

    const [course, setCourses] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);
  
    const handleAddCourse = () => {
        if (!isFaculty()) return;
        dispatch(addCourse(course));
    };

    const hancleDeleteCourse = (courseId: string) => {
        if (!isFaculty()) return;
        dispatch(deleteCourse(courseId));
    };

    const handleUpdateCourse = () => {
        if (!isFaculty()) return;
        dispatch(updateCourse(course));
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
                                courses={coursesList}
                                course={course}
                                setCourse={setCourses}
                                addNewCourse={handleAddCourse}
                                deleteCourse={hancleDeleteCourse}
                                updateCourse={handleUpdateCourse}
                                isFaculty={isFaculty}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={
                        <Courses 
                            courses={coursesList}
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
