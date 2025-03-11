import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "list-group-item text-danger active-link border-0"  // Active link styles
    : "list-group-item text-dark border-0";               // Inactive link styles

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink 
          key={link}
          to={`/Kambaz/Account/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`} 
          className={navLinkStyles}
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}
