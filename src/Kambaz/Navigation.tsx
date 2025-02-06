
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  isActive ? "list-group-item text-center border-0 bg-white text-danger"
    : "list-group-item text-center border-0 bg-black text-white";

export default function KambazNavigation() {

  return (
    <div id="wd-kambaz-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>

        <NavLink to="/Kambaz/Account" id="wd-account-link" className={navLinkStyles}>
        <FaRegCircleUser className="fs-1 text-danger" /><br />
        Account
      </NavLink>


      <NavLink to="/Kambaz/Dashboard" id="wd-dashboard-link" className={navLinkStyles}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard
      </NavLink>

      <NavLink to="/Kambaz/Dashboard" id="wd-course-link" className={navLinkStyles}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </NavLink>

      <NavLink to="/Kambaz/Calendar" id="wd-calendar-link" className={navLinkStyles}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar
      </NavLink>

      <NavLink to="/Kambaz/Inbox" id="wd-inbox-link" className={navLinkStyles}>
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox
      </NavLink>

      <NavLink to="/Labs" id="wd-labs-link" className={navLinkStyles}>
        <FaRegCircleUser className="fs-1 text-danger" /><br />
        Labs
      </NavLink>
    </div>
  );
}
