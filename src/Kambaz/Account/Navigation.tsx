import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "list-group-item text-danger active-link border-0"  // Active link styles
    : "list-group-item text-dark border-0";               // Inactive link styles

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <NavLink to="/Kambaz/Account/Signin" id="wd-course-home-link" className={navLinkStyles}>
        Signin
      </NavLink>
      <NavLink to="/Kambaz/Account/Signup" id="wd-course-modules-link" className={navLinkStyles}>
        Signup
      </NavLink>
      <NavLink to="/Kambaz/Account/Profile" id="wd-course-piazza-link" className={navLinkStyles}>
        Profile
      </NavLink>
    </div>
  );
}
