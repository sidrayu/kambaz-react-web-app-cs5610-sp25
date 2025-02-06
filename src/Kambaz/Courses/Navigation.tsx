
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "list-group-item text-danger active-link border-0"   // Active link: red text + black vertical bar
    : "list-group-item text-dark border-0";                // Inactive link: normal dark text

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to="/Kambaz/Courses/1234/Home" id="wd-course-home-link" className={navLinkStyles}>Home</NavLink>
      <NavLink to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link" className={navLinkStyles}>Modules</NavLink>
      <NavLink to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link" className={navLinkStyles}>Piazza</NavLink>
      <NavLink to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link" className={navLinkStyles}>Zoom</NavLink>
      <NavLink to="/Kambaz/Courses/1234/Assignments" id="wd-course-assignments-link" className={navLinkStyles}>Assignments</NavLink>
      <NavLink to="/Kambaz/Courses/1234/Quizzes" id="wd-course-quizzes-link" className={navLinkStyles}>Quizzes</NavLink>
      <NavLink to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link" className={navLinkStyles}>Grades</NavLink>
      <NavLink to="/Kambaz/Courses/:cid/People" id="wd-course-people-link" className={navLinkStyles}>People</NavLink>
    </div>
  );
}
