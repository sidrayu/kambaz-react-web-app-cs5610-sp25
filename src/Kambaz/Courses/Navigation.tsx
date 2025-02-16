import { NavLink, useParams, useLocation } from "react-router-dom";

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "list-group-item text-dark active-link border-0 fw-normal"
    : "list-group-item text-danger border-0";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className={navLinkStyles}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
